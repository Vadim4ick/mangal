import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  GraphQLStringOrFloat: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export enum EventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly create_orderItem_item: Maybe<OrderItem>;
  readonly create_orderItem_items: ReadonlyArray<OrderItem>;
  readonly create_orders_item: Maybe<Orders>;
  readonly create_orders_items: ReadonlyArray<Orders>;
  readonly update_orderItem_batch: ReadonlyArray<OrderItem>;
  readonly update_orderItem_item: Maybe<OrderItem>;
  readonly update_orderItem_items: ReadonlyArray<OrderItem>;
  readonly update_orders_batch: ReadonlyArray<Orders>;
  readonly update_orders_item: Maybe<Orders>;
  readonly update_orders_items: ReadonlyArray<Orders>;
};


export type MutationCreate_OrderItem_ItemArgs = {
  data: Create_OrderItem_Input;
};


export type MutationCreate_OrderItem_ItemsArgs = {
  data: InputMaybe<ReadonlyArray<Create_OrderItem_Input>>;
  filter: InputMaybe<OrderItem_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Orders_ItemArgs = {
  data: Create_Orders_Input;
};


export type MutationCreate_Orders_ItemsArgs = {
  data: InputMaybe<ReadonlyArray<Create_Orders_Input>>;
  filter: InputMaybe<Orders_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_OrderItem_BatchArgs = {
  data: InputMaybe<ReadonlyArray<Update_OrderItem_Input>>;
  filter: InputMaybe<OrderItem_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_OrderItem_ItemArgs = {
  data: Update_OrderItem_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_OrderItem_ItemsArgs = {
  data: Update_OrderItem_Input;
  filter: InputMaybe<OrderItem_Filter>;
  ids: ReadonlyArray<InputMaybe<Scalars['ID']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Orders_BatchArgs = {
  data: InputMaybe<ReadonlyArray<Update_Orders_Input>>;
  filter: InputMaybe<Orders_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Orders_ItemArgs = {
  data: Update_Orders_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Orders_ItemsArgs = {
  data: Update_Orders_Input;
  filter: InputMaybe<Orders_Filter>;
  ids: ReadonlyArray<InputMaybe<Scalars['ID']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly orderItem: ReadonlyArray<OrderItem>;
  readonly orderItem_aggregated: ReadonlyArray<OrderItem_Aggregated>;
  readonly orderItem_by_id: Maybe<OrderItem>;
  readonly orderItem_by_version: Maybe<Version_OrderItem>;
  readonly orders: ReadonlyArray<Orders>;
  readonly orders_aggregated: ReadonlyArray<Orders_Aggregated>;
  readonly orders_by_id: Maybe<Orders>;
  readonly orders_by_version: Maybe<Version_Orders>;
};


export type QueryOrderItemArgs = {
  filter: InputMaybe<OrderItem_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOrderItem_AggregatedArgs = {
  filter: InputMaybe<OrderItem_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOrderItem_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrderItem_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryOrdersArgs = {
  filter: InputMaybe<Orders_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOrders_AggregatedArgs = {
  filter: InputMaybe<Orders_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryOrders_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrders_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};

export type Subscription = {
  readonly __typename?: 'Subscription';
  readonly orderItem_mutated: Maybe<OrderItem_Mutated>;
  readonly orders_mutated: Maybe<Orders_Mutated>;
};


export type SubscriptionOrderItem_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionOrders_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};

export type Boolean_Filter_Operators = {
  readonly _eq: InputMaybe<Scalars['Boolean']['input']>;
  readonly _neq: InputMaybe<Scalars['Boolean']['input']>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type Count_Function_Filter_Operators = {
  readonly count: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  readonly __typename?: 'count_functions';
  readonly count: Maybe<Scalars['Int']['output']>;
};

export type Create_OrderItem_Input = {
  readonly count: InputMaybe<Scalars['Int']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly modificators: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly orderId: InputMaybe<Create_Orders_Input>;
  readonly totalPrice: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Orders_Input = {
  readonly address: InputMaybe<Scalars['String']['input']>;
  readonly basket: InputMaybe<ReadonlyArray<InputMaybe<Create_OrderItem_Input>>>;
  readonly comment: InputMaybe<Scalars['String']['input']>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly isDelivery: InputMaybe<Scalars['Boolean']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly phone: InputMaybe<Scalars['String']['input']>;
  readonly totalPrice: InputMaybe<Scalars['Int']['input']>;
};

export type Number_Filter_Operators = {
  readonly _between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _eq: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _gt: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _gte: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _lt: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _lte: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _nbetween: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _neq: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  readonly _nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderItem = {
  readonly __typename?: 'orderItem';
  readonly count: Maybe<Scalars['Int']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly modificators: Maybe<Scalars['String']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly orderId: Maybe<Orders>;
  readonly totalPrice: Maybe<Scalars['Int']['output']>;
};


export type OrderItemOrderIdArgs = {
  filter: InputMaybe<Orders_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type OrderItem_Aggregated = {
  readonly __typename?: 'orderItem_aggregated';
  readonly avg: Maybe<OrderItem_Aggregated_Fields>;
  readonly avgDistinct: Maybe<OrderItem_Aggregated_Fields>;
  readonly count: Maybe<OrderItem_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<OrderItem_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<OrderItem_Aggregated_Fields>;
  readonly min: Maybe<OrderItem_Aggregated_Fields>;
  readonly sum: Maybe<OrderItem_Aggregated_Fields>;
  readonly sumDistinct: Maybe<OrderItem_Aggregated_Fields>;
};

export type OrderItem_Aggregated_Count = {
  readonly __typename?: 'orderItem_aggregated_count';
  readonly count: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly modificators: Maybe<Scalars['Int']['output']>;
  readonly name: Maybe<Scalars['Int']['output']>;
  readonly orderId: Maybe<Scalars['Int']['output']>;
  readonly totalPrice: Maybe<Scalars['Int']['output']>;
};

export type OrderItem_Aggregated_Fields = {
  readonly __typename?: 'orderItem_aggregated_fields';
  readonly count: Maybe<Scalars['Float']['output']>;
  readonly id: Maybe<Scalars['Float']['output']>;
  readonly orderId: Maybe<Scalars['Float']['output']>;
  readonly totalPrice: Maybe<Scalars['Float']['output']>;
};

export type OrderItem_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<OrderItem_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<OrderItem_Filter>>>;
  readonly count: InputMaybe<Number_Filter_Operators>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly modificators: InputMaybe<String_Filter_Operators>;
  readonly name: InputMaybe<String_Filter_Operators>;
  readonly orderId: InputMaybe<Orders_Filter>;
  readonly totalPrice: InputMaybe<Number_Filter_Operators>;
};

export type OrderItem_Mutated = {
  readonly __typename?: 'orderItem_mutated';
  readonly data: Maybe<OrderItem>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Orders = {
  readonly __typename?: 'orders';
  readonly address: Maybe<Scalars['String']['output']>;
  readonly basket: Maybe<ReadonlyArray<Maybe<OrderItem>>>;
  readonly basket_func: Maybe<Count_Functions>;
  readonly comment: Maybe<Scalars['String']['output']>;
  readonly email: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly isDelivery: Maybe<Scalars['Boolean']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly phone: Maybe<Scalars['String']['output']>;
  readonly totalPrice: Maybe<Scalars['Int']['output']>;
};


export type OrdersBasketArgs = {
  filter: InputMaybe<OrderItem_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Orders_Aggregated = {
  readonly __typename?: 'orders_aggregated';
  readonly avg: Maybe<Orders_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Orders_Aggregated_Fields>;
  readonly count: Maybe<Orders_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Orders_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Orders_Aggregated_Fields>;
  readonly min: Maybe<Orders_Aggregated_Fields>;
  readonly sum: Maybe<Orders_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Orders_Aggregated_Fields>;
};

export type Orders_Aggregated_Count = {
  readonly __typename?: 'orders_aggregated_count';
  readonly address: Maybe<Scalars['Int']['output']>;
  readonly basket: Maybe<Scalars['Int']['output']>;
  readonly comment: Maybe<Scalars['Int']['output']>;
  readonly email: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly isDelivery: Maybe<Scalars['Int']['output']>;
  readonly name: Maybe<Scalars['Int']['output']>;
  readonly phone: Maybe<Scalars['Int']['output']>;
  readonly totalPrice: Maybe<Scalars['Int']['output']>;
};

export type Orders_Aggregated_Fields = {
  readonly __typename?: 'orders_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
  readonly totalPrice: Maybe<Scalars['Float']['output']>;
};

export type Orders_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Orders_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Orders_Filter>>>;
  readonly address: InputMaybe<String_Filter_Operators>;
  readonly basket: InputMaybe<OrderItem_Filter>;
  readonly basket_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly comment: InputMaybe<String_Filter_Operators>;
  readonly email: InputMaybe<String_Filter_Operators>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly isDelivery: InputMaybe<Boolean_Filter_Operators>;
  readonly name: InputMaybe<String_Filter_Operators>;
  readonly phone: InputMaybe<String_Filter_Operators>;
  readonly totalPrice: InputMaybe<Number_Filter_Operators>;
};

export type Orders_Mutated = {
  readonly __typename?: 'orders_mutated';
  readonly data: Maybe<Orders>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type String_Filter_Operators = {
  readonly _contains: InputMaybe<Scalars['String']['input']>;
  readonly _empty: InputMaybe<Scalars['Boolean']['input']>;
  readonly _ends_with: InputMaybe<Scalars['String']['input']>;
  readonly _eq: InputMaybe<Scalars['String']['input']>;
  readonly _icontains: InputMaybe<Scalars['String']['input']>;
  readonly _iends_with: InputMaybe<Scalars['String']['input']>;
  readonly _in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly _istarts_with: InputMaybe<Scalars['String']['input']>;
  readonly _ncontains: InputMaybe<Scalars['String']['input']>;
  readonly _nempty: InputMaybe<Scalars['Boolean']['input']>;
  readonly _nends_with: InputMaybe<Scalars['String']['input']>;
  readonly _neq: InputMaybe<Scalars['String']['input']>;
  readonly _niends_with: InputMaybe<Scalars['String']['input']>;
  readonly _nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly _nistarts_with: InputMaybe<Scalars['String']['input']>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _nstarts_with: InputMaybe<Scalars['String']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
  readonly _starts_with: InputMaybe<Scalars['String']['input']>;
};

export type Update_OrderItem_Input = {
  readonly count: InputMaybe<Scalars['Int']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly modificators: InputMaybe<Scalars['String']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly orderId: InputMaybe<Update_Orders_Input>;
  readonly totalPrice: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Orders_Input = {
  readonly address: InputMaybe<Scalars['String']['input']>;
  readonly basket: InputMaybe<ReadonlyArray<InputMaybe<Update_OrderItem_Input>>>;
  readonly comment: InputMaybe<Scalars['String']['input']>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly id: InputMaybe<Scalars['ID']['input']>;
  readonly isDelivery: InputMaybe<Scalars['Boolean']['input']>;
  readonly name: InputMaybe<Scalars['String']['input']>;
  readonly phone: InputMaybe<Scalars['String']['input']>;
  readonly totalPrice: InputMaybe<Scalars['Int']['input']>;
};

export type Version_OrderItem = {
  readonly __typename?: 'version_orderItem';
  readonly count: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['ID']['output']>;
  readonly modificators: Maybe<Scalars['String']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly orderId: Maybe<Scalars['JSON']['output']>;
  readonly totalPrice: Maybe<Scalars['Int']['output']>;
};

export type Version_Orders = {
  readonly __typename?: 'version_orders';
  readonly address: Maybe<Scalars['String']['output']>;
  readonly basket: Maybe<Scalars['JSON']['output']>;
  readonly comment: Maybe<Scalars['String']['output']>;
  readonly email: Maybe<Scalars['String']['output']>;
  readonly id: Maybe<Scalars['ID']['output']>;
  readonly isDelivery: Maybe<Scalars['Boolean']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  readonly phone: Maybe<Scalars['String']['output']>;
  readonly totalPrice: Maybe<Scalars['Int']['output']>;
};

export type CreateOrderItemMutationVariables = Exact<{
  totalPrice: InputMaybe<Scalars['Int']['input']>;
  isDelivery: InputMaybe<Scalars['Boolean']['input']>;
  email: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  phone: InputMaybe<Scalars['String']['input']>;
  address: InputMaybe<Scalars['String']['input']>;
  comment: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateOrderItemMutation = { readonly __typename?: 'Mutation', readonly create_orders_item: { readonly __typename?: 'orders', readonly id: string, readonly totalPrice: number, readonly isDelivery: boolean, readonly email: string, readonly name: string, readonly phone: string, readonly address: string, readonly comment: string } };

export type CreateOrderItemItemMutationVariables = Exact<{
  count: InputMaybe<Scalars['Int']['input']>;
  totalPrice: InputMaybe<Scalars['Int']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  modificators: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
}>;


export type CreateOrderItemItemMutation = { readonly __typename?: 'Mutation', readonly create_orderItem_item: { readonly __typename?: 'orderItem', readonly count: number, readonly id: string, readonly name: string, readonly modificators: string, readonly totalPrice: number } };

export type GetOrderByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetOrderByIdQuery = { readonly __typename?: 'Query', readonly orders_by_id: { readonly __typename?: 'orders', readonly id: string, readonly totalPrice: number, readonly isDelivery: boolean, readonly email: string, readonly name: string, readonly phone: string, readonly address: string, readonly comment: string, readonly basket: ReadonlyArray<{ readonly __typename?: 'orderItem', readonly count: number, readonly name: string, readonly totalPrice: number, readonly modificators: string }> } };


export const CreateOrderItemDocument = gql`
    mutation CreateOrderItem($totalPrice: Int, $isDelivery: Boolean, $email: String, $name: String, $phone: String, $address: String, $comment: String) {
  create_orders_item(
    data: {totalPrice: $totalPrice, isDelivery: $isDelivery, email: $email, name: $name, phone: $phone, address: $address, comment: $comment}
  ) {
    id
    totalPrice
    isDelivery
    email
    name
    phone
    address
    comment
  }
}
    `;
export const CreateOrderItemItemDocument = gql`
    mutation CreateOrderItemItem($count: Int, $totalPrice: Int, $name: String, $modificators: String, $id: ID!) {
  create_orderItem_item(
    data: {count: $count, name: $name, totalPrice: $totalPrice, orderId: {id: $id}, modificators: $modificators}
  ) {
    count
    id
    name
    modificators
    totalPrice
  }
}
    `;
export const GetOrderByIdDocument = gql`
    query GetOrderById($id: ID!) {
  orders_by_id(id: $id) {
    id
    totalPrice
    isDelivery
    email
    name
    phone
    basket {
      count
      name
      totalPrice
      modificators
    }
    address
    comment
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    CreateOrderItem(variables?: CreateOrderItemMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateOrderItemMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateOrderItemMutation>(CreateOrderItemDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateOrderItem', 'mutation', variables);
    },
    CreateOrderItemItem(variables: CreateOrderItemItemMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateOrderItemItemMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateOrderItemItemMutation>(CreateOrderItemItemDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateOrderItemItem', 'mutation', variables);
    },
    GetOrderById(variables: GetOrderByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetOrderByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetOrderByIdQuery>(GetOrderByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetOrderById', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;