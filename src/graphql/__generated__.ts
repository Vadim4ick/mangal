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
  Date: { input: any; output: any; }
  GraphQLBigInt: { input: any; output: any; }
  GraphQLStringOrFloat: { input: any; output: any; }
  Hash: { input: any; output: any; }
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
  readonly homePage: Maybe<HomePage>;
  readonly homePage_by_version: Maybe<Version_HomePage>;
  readonly homePage_slider: ReadonlyArray<HomePage_Slider>;
  readonly homePage_slider_aggregated: ReadonlyArray<HomePage_Slider_Aggregated>;
  readonly homePage_slider_by_id: Maybe<HomePage_Slider>;
  readonly homePage_slider_by_version: Maybe<Version_HomePage_Slider>;
  readonly orderItem: ReadonlyArray<OrderItem>;
  readonly orderItem_aggregated: ReadonlyArray<OrderItem_Aggregated>;
  readonly orderItem_by_id: Maybe<OrderItem>;
  readonly orderItem_by_version: Maybe<Version_OrderItem>;
  readonly orders: ReadonlyArray<Orders>;
  readonly orders_aggregated: ReadonlyArray<Orders_Aggregated>;
  readonly orders_by_id: Maybe<Orders>;
  readonly orders_by_version: Maybe<Version_Orders>;
  readonly settings: Maybe<Settings>;
  readonly settings_by_version: Maybe<Version_Settings>;
  readonly slider: ReadonlyArray<Slider>;
  readonly slider_aggregated: ReadonlyArray<Slider_Aggregated>;
  readonly slider_by_id: Maybe<Slider>;
  readonly slider_by_version: Maybe<Version_Slider>;
};


export type QueryHomePageArgs = {
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryHomePage_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryHomePage_SliderArgs = {
  filter: InputMaybe<HomePage_Slider_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHomePage_Slider_AggregatedArgs = {
  filter: InputMaybe<HomePage_Slider_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHomePage_Slider_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QueryHomePage_Slider_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
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


export type QuerySettingsArgs = {
  version: InputMaybe<Scalars['String']['input']>;
};


export type QuerySettings_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QuerySliderArgs = {
  filter: InputMaybe<Slider_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySlider_AggregatedArgs = {
  filter: InputMaybe<Slider_Filter>;
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySlider_By_IdArgs = {
  id: Scalars['ID']['input'];
  version: InputMaybe<Scalars['String']['input']>;
};


export type QuerySlider_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};

export type Subscription = {
  readonly __typename?: 'Subscription';
  readonly directus_files_mutated: Maybe<Directus_Files_Mutated>;
  readonly directus_folders_mutated: Maybe<Directus_Folders_Mutated>;
  readonly directus_notifications_mutated: Maybe<Directus_Notifications_Mutated>;
  readonly directus_shares_mutated: Maybe<Directus_Shares_Mutated>;
  readonly homePage_mutated: Maybe<HomePage_Mutated>;
  readonly homePage_slider_mutated: Maybe<HomePage_Slider_Mutated>;
  readonly orderItem_mutated: Maybe<OrderItem_Mutated>;
  readonly orders_mutated: Maybe<Orders_Mutated>;
  readonly settings_mutated: Maybe<Settings_Mutated>;
  readonly slider_mutated: Maybe<Slider_Mutated>;
};


export type SubscriptionDirectus_Files_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Folders_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Notifications_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Shares_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionHomePage_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionHomePage_Slider_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionOrderItem_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionOrders_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionSettings_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};


export type SubscriptionSlider_MutatedArgs = {
  event: InputMaybe<EventEnum>;
};

export type Big_Int_Filter_Operators = {
  readonly _between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  readonly _eq: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _gt: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _gte: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  readonly _lt: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _lte: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _nbetween: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  readonly _neq: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  readonly _nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
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

export type Date_Filter_Operators = {
  readonly _between: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _eq: InputMaybe<Scalars['String']['input']>;
  readonly _gt: InputMaybe<Scalars['String']['input']>;
  readonly _gte: InputMaybe<Scalars['String']['input']>;
  readonly _in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly _lt: InputMaybe<Scalars['String']['input']>;
  readonly _lte: InputMaybe<Scalars['String']['input']>;
  readonly _nbetween: InputMaybe<ReadonlyArray<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  readonly _neq: InputMaybe<Scalars['String']['input']>;
  readonly _nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly _nnull: InputMaybe<Scalars['Boolean']['input']>;
  readonly _null: InputMaybe<Scalars['Boolean']['input']>;
};

export type Datetime_Function_Filter_Operators = {
  readonly day: InputMaybe<Number_Filter_Operators>;
  readonly hour: InputMaybe<Number_Filter_Operators>;
  readonly minute: InputMaybe<Number_Filter_Operators>;
  readonly month: InputMaybe<Number_Filter_Operators>;
  readonly second: InputMaybe<Number_Filter_Operators>;
  readonly week: InputMaybe<Number_Filter_Operators>;
  readonly weekday: InputMaybe<Number_Filter_Operators>;
  readonly year: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  readonly __typename?: 'datetime_functions';
  readonly day: Maybe<Scalars['Int']['output']>;
  readonly hour: Maybe<Scalars['Int']['output']>;
  readonly minute: Maybe<Scalars['Int']['output']>;
  readonly month: Maybe<Scalars['Int']['output']>;
  readonly second: Maybe<Scalars['Int']['output']>;
  readonly week: Maybe<Scalars['Int']['output']>;
  readonly weekday: Maybe<Scalars['Int']['output']>;
  readonly year: Maybe<Scalars['Int']['output']>;
};

export type Directus_Files = {
  readonly __typename?: 'directus_files';
  readonly charset: Maybe<Scalars['String']['output']>;
  readonly created_on: Maybe<Scalars['Date']['output']>;
  readonly created_on_func: Maybe<Datetime_Functions>;
  readonly description: Maybe<Scalars['String']['output']>;
  readonly duration: Maybe<Scalars['Int']['output']>;
  readonly embed: Maybe<Scalars['String']['output']>;
  readonly filename_disk: Maybe<Scalars['String']['output']>;
  readonly filename_download: Scalars['String']['output'];
  readonly filesize: Maybe<Scalars['GraphQLBigInt']['output']>;
  readonly focal_point_x: Maybe<Scalars['Int']['output']>;
  readonly focal_point_y: Maybe<Scalars['Int']['output']>;
  readonly folder: Maybe<Directus_Folders>;
  readonly height: Maybe<Scalars['Int']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly location: Maybe<Scalars['String']['output']>;
  readonly metadata: Maybe<Scalars['JSON']['output']>;
  readonly metadata_func: Maybe<Count_Functions>;
  readonly modified_by: Maybe<Scalars['String']['output']>;
  readonly modified_on: Maybe<Scalars['Date']['output']>;
  readonly modified_on_func: Maybe<Datetime_Functions>;
  readonly storage: Scalars['String']['output'];
  readonly tags: Maybe<Scalars['JSON']['output']>;
  readonly tags_func: Maybe<Count_Functions>;
  readonly title: Maybe<Scalars['String']['output']>;
  readonly tus_data: Maybe<Scalars['JSON']['output']>;
  readonly tus_data_func: Maybe<Count_Functions>;
  readonly tus_id: Maybe<Scalars['String']['output']>;
  readonly type: Maybe<Scalars['String']['output']>;
  readonly uploaded_by: Maybe<Scalars['String']['output']>;
  readonly uploaded_on: Maybe<Scalars['Date']['output']>;
  readonly uploaded_on_func: Maybe<Datetime_Functions>;
  readonly width: Maybe<Scalars['Int']['output']>;
};


export type Directus_FilesFolderArgs = {
  filter: InputMaybe<Directus_Folders_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Files_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Directus_Files_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Directus_Files_Filter>>>;
  readonly charset: InputMaybe<String_Filter_Operators>;
  readonly created_on: InputMaybe<Date_Filter_Operators>;
  readonly created_on_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly description: InputMaybe<String_Filter_Operators>;
  readonly duration: InputMaybe<Number_Filter_Operators>;
  readonly embed: InputMaybe<String_Filter_Operators>;
  readonly filename_disk: InputMaybe<String_Filter_Operators>;
  readonly filename_download: InputMaybe<String_Filter_Operators>;
  readonly filesize: InputMaybe<Big_Int_Filter_Operators>;
  readonly focal_point_x: InputMaybe<Number_Filter_Operators>;
  readonly focal_point_y: InputMaybe<Number_Filter_Operators>;
  readonly folder: InputMaybe<Directus_Folders_Filter>;
  readonly height: InputMaybe<Number_Filter_Operators>;
  readonly id: InputMaybe<String_Filter_Operators>;
  readonly location: InputMaybe<String_Filter_Operators>;
  readonly metadata: InputMaybe<String_Filter_Operators>;
  readonly metadata_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly modified_by: InputMaybe<String_Filter_Operators>;
  readonly modified_on: InputMaybe<Date_Filter_Operators>;
  readonly modified_on_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly storage: InputMaybe<String_Filter_Operators>;
  readonly tags: InputMaybe<String_Filter_Operators>;
  readonly tags_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
  readonly tus_data: InputMaybe<String_Filter_Operators>;
  readonly tus_data_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly tus_id: InputMaybe<String_Filter_Operators>;
  readonly type: InputMaybe<String_Filter_Operators>;
  readonly uploaded_by: InputMaybe<String_Filter_Operators>;
  readonly uploaded_on: InputMaybe<Date_Filter_Operators>;
  readonly uploaded_on_func: InputMaybe<Datetime_Function_Filter_Operators>;
  readonly width: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Files_Mutated = {
  readonly __typename?: 'directus_files_mutated';
  readonly data: Maybe<Directus_Files>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Directus_Folders = {
  readonly __typename?: 'directus_folders';
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly parent: Maybe<Directus_Folders>;
};


export type Directus_FoldersParentArgs = {
  filter: InputMaybe<Directus_Folders_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Folders_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Directus_Folders_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Directus_Folders_Filter>>>;
  readonly id: InputMaybe<String_Filter_Operators>;
  readonly name: InputMaybe<String_Filter_Operators>;
  readonly parent: InputMaybe<Directus_Folders_Filter>;
};

export type Directus_Folders_Mutated = {
  readonly __typename?: 'directus_folders_mutated';
  readonly data: Maybe<Directus_Folders>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Directus_Notifications = {
  readonly __typename?: 'directus_notifications';
  readonly collection: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly item: Maybe<Scalars['String']['output']>;
  readonly message: Maybe<Scalars['String']['output']>;
  readonly recipient: Scalars['String']['output'];
  readonly sender: Maybe<Scalars['String']['output']>;
  readonly status: Maybe<Scalars['String']['output']>;
  readonly subject: Scalars['String']['output'];
  readonly timestamp: Maybe<Scalars['Date']['output']>;
  readonly timestamp_func: Maybe<Datetime_Functions>;
};

export type Directus_Notifications_Mutated = {
  readonly __typename?: 'directus_notifications_mutated';
  readonly data: Maybe<Directus_Notifications>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Directus_Shares = {
  readonly __typename?: 'directus_shares';
  readonly collection: Scalars['String']['output'];
  readonly date_created: Maybe<Scalars['Date']['output']>;
  readonly date_created_func: Maybe<Datetime_Functions>;
  /** $t:shared_leave_blank_for_unlimited */
  readonly date_end: Maybe<Scalars['Date']['output']>;
  readonly date_end_func: Maybe<Datetime_Functions>;
  /** $t:shared_leave_blank_for_unlimited */
  readonly date_start: Maybe<Scalars['Date']['output']>;
  readonly date_start_func: Maybe<Datetime_Functions>;
  readonly id: Scalars['ID']['output'];
  readonly item: Scalars['String']['output'];
  /** $t:shared_leave_blank_for_unlimited */
  readonly max_uses: Maybe<Scalars['Int']['output']>;
  readonly name: Maybe<Scalars['String']['output']>;
  /** $t:shared_leave_blank_for_passwordless_access */
  readonly password: Maybe<Scalars['Hash']['output']>;
  readonly role: Maybe<Scalars['String']['output']>;
  readonly times_used: Maybe<Scalars['Int']['output']>;
  readonly user_created: Maybe<Scalars['String']['output']>;
};

export type Directus_Shares_Mutated = {
  readonly __typename?: 'directus_shares_mutated';
  readonly data: Maybe<Directus_Shares>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type HomePage = {
  readonly __typename?: 'homePage';
  readonly about: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly slider: Maybe<ReadonlyArray<Maybe<HomePage_Slider>>>;
  readonly slider_func: Maybe<Count_Functions>;
  readonly title: Maybe<Scalars['String']['output']>;
};


export type HomePageSliderArgs = {
  filter: InputMaybe<HomePage_Slider_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePage_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<HomePage_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<HomePage_Filter>>>;
  readonly about: InputMaybe<String_Filter_Operators>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly slider: InputMaybe<HomePage_Slider_Filter>;
  readonly slider_func: InputMaybe<Count_Function_Filter_Operators>;
  readonly title: InputMaybe<String_Filter_Operators>;
};

export type HomePage_Mutated = {
  readonly __typename?: 'homePage_mutated';
  readonly data: Maybe<HomePage>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type HomePage_Slider = {
  readonly __typename?: 'homePage_slider';
  readonly homePage_id: Maybe<HomePage>;
  readonly id: Scalars['ID']['output'];
  readonly slider_id: Maybe<Slider>;
};


export type HomePage_SliderHomePage_IdArgs = {
  filter: InputMaybe<HomePage_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type HomePage_SliderSlider_IdArgs = {
  filter: InputMaybe<Slider_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePage_Slider_Aggregated = {
  readonly __typename?: 'homePage_slider_aggregated';
  readonly avg: Maybe<HomePage_Slider_Aggregated_Fields>;
  readonly avgDistinct: Maybe<HomePage_Slider_Aggregated_Fields>;
  readonly count: Maybe<HomePage_Slider_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<HomePage_Slider_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<HomePage_Slider_Aggregated_Fields>;
  readonly min: Maybe<HomePage_Slider_Aggregated_Fields>;
  readonly sum: Maybe<HomePage_Slider_Aggregated_Fields>;
  readonly sumDistinct: Maybe<HomePage_Slider_Aggregated_Fields>;
};

export type HomePage_Slider_Aggregated_Count = {
  readonly __typename?: 'homePage_slider_aggregated_count';
  readonly homePage_id: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly slider_id: Maybe<Scalars['Int']['output']>;
};

export type HomePage_Slider_Aggregated_Fields = {
  readonly __typename?: 'homePage_slider_aggregated_fields';
  readonly homePage_id: Maybe<Scalars['Float']['output']>;
  readonly id: Maybe<Scalars['Float']['output']>;
  readonly slider_id: Maybe<Scalars['Float']['output']>;
};

export type HomePage_Slider_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<HomePage_Slider_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<HomePage_Slider_Filter>>>;
  readonly homePage_id: InputMaybe<HomePage_Filter>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly slider_id: InputMaybe<Slider_Filter>;
};

export type HomePage_Slider_Mutated = {
  readonly __typename?: 'homePage_slider_mutated';
  readonly data: Maybe<HomePage_Slider>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
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

export type Settings = {
  readonly __typename?: 'settings';
  readonly adress: Maybe<Scalars['String']['output']>;
  readonly bik: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly inn: Maybe<Scalars['String']['output']>;
  readonly ip: Maybe<Scalars['String']['output']>;
  readonly ogrnip: Maybe<Scalars['String']['output']>;
  readonly phone: Maybe<Scalars['GraphQLBigInt']['output']>;
  readonly time: Maybe<Scalars['String']['output']>;
};

export type Settings_Mutated = {
  readonly __typename?: 'settings_mutated';
  readonly data: Maybe<Settings>;
  readonly event: Maybe<EventEnum>;
  readonly key: Scalars['ID']['output'];
};

export type Slider = {
  readonly __typename?: 'slider';
  readonly desc: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly img: Maybe<Directus_Files>;
  readonly title: Maybe<Scalars['String']['output']>;
};


export type SliderImgArgs = {
  filter: InputMaybe<Directus_Files_Filter>;
  limit: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type Slider_Aggregated = {
  readonly __typename?: 'slider_aggregated';
  readonly avg: Maybe<Slider_Aggregated_Fields>;
  readonly avgDistinct: Maybe<Slider_Aggregated_Fields>;
  readonly count: Maybe<Slider_Aggregated_Count>;
  readonly countAll: Maybe<Scalars['Int']['output']>;
  readonly countDistinct: Maybe<Slider_Aggregated_Count>;
  readonly group: Maybe<Scalars['JSON']['output']>;
  readonly max: Maybe<Slider_Aggregated_Fields>;
  readonly min: Maybe<Slider_Aggregated_Fields>;
  readonly sum: Maybe<Slider_Aggregated_Fields>;
  readonly sumDistinct: Maybe<Slider_Aggregated_Fields>;
};

export type Slider_Aggregated_Count = {
  readonly __typename?: 'slider_aggregated_count';
  readonly desc: Maybe<Scalars['Int']['output']>;
  readonly id: Maybe<Scalars['Int']['output']>;
  readonly img: Maybe<Scalars['Int']['output']>;
  readonly title: Maybe<Scalars['Int']['output']>;
};

export type Slider_Aggregated_Fields = {
  readonly __typename?: 'slider_aggregated_fields';
  readonly id: Maybe<Scalars['Float']['output']>;
};

export type Slider_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Slider_Filter>>>;
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Slider_Filter>>>;
  readonly desc: InputMaybe<String_Filter_Operators>;
  readonly id: InputMaybe<Number_Filter_Operators>;
  readonly img: InputMaybe<Directus_Files_Filter>;
  readonly title: InputMaybe<String_Filter_Operators>;
};

export type Slider_Mutated = {
  readonly __typename?: 'slider_mutated';
  readonly data: Maybe<Slider>;
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

export type Version_HomePage = {
  readonly __typename?: 'version_homePage';
  readonly about: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly slider: Maybe<Scalars['JSON']['output']>;
  readonly slider_func: Maybe<Count_Functions>;
  readonly title: Maybe<Scalars['String']['output']>;
};

export type Version_HomePage_Slider = {
  readonly __typename?: 'version_homePage_slider';
  readonly homePage_id: Maybe<Scalars['JSON']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly slider_id: Maybe<Scalars['JSON']['output']>;
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

export type Version_Settings = {
  readonly __typename?: 'version_settings';
  readonly adress: Maybe<Scalars['String']['output']>;
  readonly bik: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly inn: Maybe<Scalars['String']['output']>;
  readonly ip: Maybe<Scalars['String']['output']>;
  readonly ogrnip: Maybe<Scalars['String']['output']>;
  readonly phone: Maybe<Scalars['GraphQLBigInt']['output']>;
  readonly time: Maybe<Scalars['String']['output']>;
};

export type Version_Slider = {
  readonly __typename?: 'version_slider';
  readonly desc: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly img: Maybe<Scalars['JSON']['output']>;
  readonly title: Maybe<Scalars['String']['output']>;
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

export type GetHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageQuery = { readonly __typename?: 'Query', readonly homePage: { readonly __typename?: 'homePage', readonly id: string, readonly title: string, readonly about: string, readonly slider: ReadonlyArray<{ readonly __typename?: 'homePage_slider', readonly id: string, readonly slider_id: { readonly __typename?: 'slider', readonly id: string, readonly title: string, readonly desc: string, readonly img: { readonly __typename?: 'directus_files', readonly id: string, readonly width: number, readonly height: number, readonly title: string } } }> } };

export type GetSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSettingsQuery = { readonly __typename?: 'Query', readonly settings: { readonly __typename?: 'settings', readonly id: string, readonly adress: string, readonly time: string, readonly ip: string, readonly bik: string, readonly ogrnip: string, readonly inn: string, readonly phone: any } };


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
export const GetHomePageDocument = gql`
    query GetHomePage {
  homePage {
    id
    title
    about
    slider {
      id
      slider_id {
        id
        img {
          id
          width
          height
          title
        }
        title
        desc
      }
    }
  }
}
    `;
export const GetSettingsDocument = gql`
    query GetSettings {
  settings {
    id
    adress
    time
    ip
    bik
    ogrnip
    inn
    phone
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
    },
    GetHomePage(variables?: GetHomePageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetHomePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHomePageQuery>(GetHomePageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetHomePage', 'query', variables);
    },
    GetSettings(variables?: GetSettingsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSettingsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSettingsQuery>(GetSettingsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSettings', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;