/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { Basket } from "@/components/Basket/Basket";
import { PersonalData } from "@/components/Basket/PersonalData";
import { TotalAmountForm } from "@/components/Basket/TotalAmountForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Container } from "@/shared/ui/container";
import { TypeOf, string, z } from "zod";
import { Form, Formik, FormikHelpers } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useBasketStore } from "@/store/basket";
import axios from "axios";

const contactFormSchema = z.object({
  email: string().email({
    message: "Please enter a valid email",
  }),
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be at most 50 characters" }),
  phone: z
    .string()
    .length(16, { message: "Phone number must be exactly 16 characters long" })
    .regex(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/, {
      message: "Phone number must be in the format +7(999)999-99-99",
    }),
});

// Динамическое добавление полей для адреса доставки
const createSchemaWithDelivery = (isDelivery: boolean) => {
  return contactFormSchema.extend(
    isDelivery
      ? {
          address: z
            .string()
            .min(5, { message: "Address must be at least 5 characters" })
            .max(100, { message: "Address must be at most 100 characters" }),

          comment: z.string().optional(),
        }
      : {},
  );
};

interface OrderFormValues {
  email: string;
  name: string;
  phone: string;
  address: string;
  comment: string;
}

const OrdersPage = () => {
  const { totalPrice, isDelivery, setDelivery, basket, removeAllFromBasket } =
    useBasketStore();

  const handleSubmit = async (
    values: OrderFormValues,
    { setSubmitting, resetForm }: FormikHelpers<OrderFormValues>,
  ) => {
    try {
      const response = await axios.post("/api/sendOrder", {
        ...values,
        totalPrice,
        isDelivery,
        basket,
      });

      alert(response.data.message);
      resetForm();
      removeAllFromBasket();
    } catch (error) {
      console.error("Ошибка при отправке заказа:", error);
      alert("Произошла ошибка при отправке заказа.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="flex-grow bg-[#f5f5f5] pb-[208px] max-tablet:pb-[108px] max-mobile:pb-[57px]">
      <section className="mt-[calc(58px_+_var(--header-orders-height))] max-mobile:mt-[calc(25px_+_var(--header-orders-height))]">
        <Container className="px-[4px]">
          <div className="flex flex-col gap-[58px] max-mobile:gap-[26px]">
            <h2 className="text-[36px] font-[700] leading-[49px] text-[#363636] max-tablet:pl-[12px] max-mobile:text-[32px] max-mobile:leading-[43px]">
              Оформление заказа
            </h2>

            <Formik<TypeOf<ReturnType<typeof createSchemaWithDelivery>>>
              initialValues={{
                email: "",
                name: "",
                phone: "",
                address: "",
                comment: "",
              }}
              // @ts-ignore
              onSubmit={handleSubmit}
              validationSchema={toFormikValidationSchema(
                createSchemaWithDelivery(isDelivery),
              )}
            >
              {(FormikState) => {
                const errors = FormikState.errors;

                console.log("errors", errors);

                return (
                  <Form className="card-body">
                    <div className="grid grid-cols-[1fr_360px] gap-[28px] max-desktop1250:gap-[10px] max-tablet:grid-cols-1 max-tablet:gap-4">
                      <div className="flex flex-col gap-[65px] max-mobile:gap-[32px]">
                        <div className="flex flex-col gap-[16px]">
                          <Basket />

                          <PersonalData />
                        </div>

                        <Tabs
                          onValueChange={(value) =>
                            setDelivery(value === "delivery")
                          }
                          defaultValue="delivery"
                          className="flex flex-col gap-[28px] max-mobile:gap-4"
                        >
                          <TabsList className="flex h-[55px] w-[294px] items-center justify-between rounded-[100px] border border-[#E8E8E8] bg-white p-[4px] max-xl:mx-auto">
                            <TabsTrigger
                              className="h-[47px] w-full max-w-[143px]"
                              value="delivery"
                            >
                              Доставка
                            </TabsTrigger>

                            <TabsTrigger
                              className="h-[47px] w-full max-w-[143px]"
                              value="pickup"
                            >
                              Самовывоз
                            </TabsTrigger>
                          </TabsList>

                          <TabsContent value="delivery" className="m-0">
                            <div className="flex w-full max-w-[816px] flex-col gap-[20px] rounded-[12px] bg-white p-[22px] max-xl:mx-auto max-tablet:px-3 max-tablet:pb-[41px] max-tablet:pt-4">
                              <h2 className="text-[24px] font-[700] leading-[33px] text-[#363636]">
                                Адрес доставки:
                              </h2>

                              <div className="flex flex-col gap-[20px]">
                                <div className="flex flex-col gap-[4px]">
                                  <Label htmlFor="adress">
                                    Напишите полный адрес доставки (Город,
                                    улица, дом, корпус/строение, кв.)
                                  </Label>

                                  <Input
                                    name="address"
                                    isFormik={true}
                                    id="adress"
                                  />
                                </div>

                                <div className="flex flex-col gap-[4px]">
                                  <Label htmlFor="comment">Комментарий</Label>

                                  <Textarea
                                    name="comment"
                                    isFormik={true}
                                    id="comment"
                                  />
                                </div>
                              </div>
                            </div>
                          </TabsContent>

                          <TabsContent className="m-0" value="pickup">
                            <div className="flex w-full rounded-[12px] bg-white px-[25px] py-[32px] max-tablet:flex-col max-tablet:items-center max-tablet:gap-[26px] max-tablet:px-3 max-tablet:py-[26px]">
                              <h3 className="w-full max-w-[320px] text-[20px] font-[700] leading-[27px] text-[#363636] max-tablet:text-center">
                                Самовывоз заказов производится по адресу
                              </h3>

                              <div className="flex w-full flex-col items-center gap-[14px] max-tablet:gap-[22px]">
                                <div className="w-fit rounded-[12px] bg-[#F3F3F3] px-[28px] py-[23px]">
                                  <p className="text-center text-[16px] font-[700] leading-[22px] text-[#363636]">
                                    Краснодар, ул. 40 лет победы, д.12, ”Царь
                                    Шампур”
                                  </p>
                                </div>

                                <p className="text-[12px] font-[500] leading-[16px] text-[#999999]">
                                  Оплата наличным, спб, перевод,
                                  картой(терминал)
                                </p>
                              </div>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </div>

                      <TotalAmountForm />
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default OrdersPage;
