import { Input } from "../ui/input";
import { Label } from "../ui/label";

const PersonalData = () => {
  return (
    <div className="flex w-full flex-col gap-[20px] rounded-[12px] bg-white px-[22px] pb-[22px] pt-[18px] max-mobile:gap-[24px] max-mobile:px-3 max-mobile:py-4">
      <h2 className="text-[24px] font-[700] leading-[33px] text-[#363636]">
        Персональные данные:
      </h2>

      <div className="flex w-full items-center justify-center gap-[20px] max-mobile:flex-col">
        <div className="flex w-full flex-col gap-[4px]">
          <Label htmlFor="name">Ваше имя</Label>

          <Input isFormik={true} name="name" id="name" />
        </div>

        <div className="flex w-full flex-col gap-[4px]">
          <Label htmlFor="phone">Телефон</Label>

          <Input
            isFormik={true}
            name="phone"
            telMask={true}
            id="phone"
            className="max-w-[723px]"
          />
        </div>
      </div>
    </div>
  );
};

export { PersonalData };
