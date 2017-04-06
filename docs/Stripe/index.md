<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Stripe (Preview)

Stripe allows private individuals and businesses to accept payments over the internet. You can track customers, orders, invoices and more.

## Creating a connection

To connect your account, you will need the following information:

| Parameter Name | Description | Type |
|----------------|-------------|------|
| API Key | API Key | securestring |


# Actions

## Update a product
Updates the specific product by setting the values of the parameters passed.

**Operation Id:** UpdateProduct

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Id | string | The identifier for the product. | true |
| Name | string | The product’s name, meant to be displayable to the customer. | true |
| Active | boolean | Whether or not the product is currently available for purchase. Defaults to true. | false |
| Caption | string | A short one-line description of the product, meant to be displayable to the customer. | false |
| Description | string | The product’s description, meant to be displayable to the customer. | false |
| Images | string | A list of up to 8 URLs of images for this product, meant to be displayable to the customer. | false |
| Shippable | boolean | Whether this product is shipped (i.e. physical goods). Defaults to true. | false |
| URL | string | A URL of a publicly-accessible webpage for this product. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Product_Response](#productresponse) | object |  |

___

## Create a product
Creates a new product.

**Operation Id:** CreateProduct

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Name | string | The product’s name, meant to be displayable to the customer. | true |
| Id | string | The identifier for the product. Must be unique. If not provided, an identifier will be randomly generated. | false |
| Active | boolean | Whether or not the product is currently available for purchase. Defaults to true. | false |
| Caption | string | A short one-line description of the product, meant to be displayable to the customer. | false |
| Description | string | The product’s description, meant to be displayable to the customer. | false |
| Images | string | A list of up to 8 URLs of images for this product, meant to be displayable to the customer. | false |
| Shippable | boolean | Whether this product is shipped (i.e. physical goods). Defaults to true. | false |
| URL | string | A URL of a publicly-accessible webpage for this product. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Product_Response](#productresponse) | object |  |

___

## Get a customer
Returns the details of specified customer.

**Operation Id:** GetCustomer

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Id | string | The id of the customer. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Customer_Response](#customerresponse) | object |  |

___

## Update a customer
Updates the specified customer by setting the values of the parameters passed.

**Operation Id:** UpdateCustomer

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Id | string | The id of the customer. | true |
| Description | string | An arbitrary string that you can attach to a customer, this will be unset if you send with an empty value. | false |
| Email | string | The email address of the customer, this will be unset if you send with an empty value.  | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Customer_Response](#customerresponse) | object |  |

___

## Create a customer
Create a new customer.

**Operation Id:** CreateCustomer

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Description | string | An arbitrary string that you can attach to a customer, this will be unset if you send with an empty value. | false |
| Email | string | The email address of the customer, this will be unset if you send with an empty value.  | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Customer_Response](#customerresponse) | object |  |

___

# Triggers

## When a customer is added
Triggers a new flow when a customer is added.

**Operation Id:** OnNewCustomer

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListCustomers_Response](#listcustomersresponse) | array | data |

___

## When an order is added
Triggers a new flow when an order is added.

**Operation Id:** OnNewOrder

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListOrders_Response](#listordersresponse) | array |  |

___

## When a charge is added
Triggers a new flow when a charge is added.

**Operation Id:** OnNewCharge

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListCharges_Response](#listchargesresponse) | array | data |

___

## When an invoice item is added
Triggers a new flow when an invoice item is added.

**Operation Id:** OnNewInvoiceItem

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListInvoiceItems_Response](#listinvoiceitemsresponse) | array | data |

___


## Objects

### ListCustomers_Response
data

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | string | The id of the customer. | id |
| Account Balance | int32 | Current balance, if any, being stored on the customer’s account. | account_balance |
| Created | date-time | The datetime the customer was created. | created |
| Currency | string | The currency the customer can be charged in for recurring billing purposes. | currency |
| Delinquent | boolean | Whether or not the latest charge for the customer’s latest invoice has failed. | delinquent |
| Description | string | The description of the customer. | description |
| Discount | string | Describes the current discount active on the customer, if there is one. | discount |
| Email | string | The email of the customer. | email |

### ListOrders_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | string | The id of the order. | id |
| Amount | int32 | A positive integer in the smallest currency unit. | amount |
| Amount Returned | integer | Amount in cents refunded (can be less than the amount attribute on the charge if a partial refund was issued). | amount_returned |
| Charge | string | The ID of the payment used to pay for the order. Present if the order status is paid, fulfilled, or refunded. | charge |
| Created | date-time | The datetime the order was created. | created |
| Currency | string | 3-letter ISO code representing the currency in which the order was made. | currency |
| Customer | string | The customer used for the order. | customer |
| Email | string | The email address of the customer placing the order. | email |
| Selected Shipping method | string | The shipping method that is currently selected for this order, if any. | selected_shipping_method |
| Status | string | Current order status. One of created, paid, canceled, fulfilled, or returned. | status |
| Updated | date-time | The datetime the order was updated. | updated |

### ListCharges_Response
data

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | string | The id of the charge. | id |
| Amount | int32 | A positive integer in the smallest currency unit (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a 0-decimal currency) representing how much to charge. | amount |
| Amount Refunded | int32 | Amount in cents refunded (can be less than the amount attribute on the charge if a partial refund was issued). | amount_refunded |
| Captured | boolean | If the charge was created without capturing, this boolean represents whether or not it is still uncaptured or has since been captured. | captured |
| Created | date-time | The datetime the charge was created. | created |
| Currency | string | Three-letter ISO currency code representing the currency in which the charge was made.rrency | currency |
| Customer | string | ID of the customer this charge is for if one exists. | customer |
| Description | string | The description of the charge. | description |
| Failure Code | string | Error code explaining reason for charge failure if available. | failure_code |
| Failure Message | string | Message to user further explaining reason for charge failure if available. | failure_message |
| Invoice | string | ID of the invoice this charge is for if one exists. | invoice |
| Order | string | ID of the order this charge is for if one exists. | order |
| Network Status | string | Possible values are approved_by_network, declined_by_network, not_sent_to_network, and reversed_after_approval. | outcome.network_status |
| Reason | string | An enumerated value indicating a more detailed explanation of the outcome’s type. | outcome.reason |
| Risk Level | string | Stripe’s evaluation of the riskiness of the payment. | outcome.risk_level |
| Seller Message | string | A human-readable description of the outcome type and reason, designed for the recipient of the payment. | outcome.seller_message |
| Type | string | Possible values are authorized, issuer_declined, blocked, and invalid. | outcome.type |
| Paid | boolean | True if the charge succeeded, or was successfully authorized for later capture. | paid |
| Receipt Email | string | This is the email address that the receipt for this charge was sent to. | receipt_email |
| Receipt Number | string | This is the transaction number that appears on email receipts sent for this charge. | receipt_number |
| Refunded | boolean | Whether or not the charge has been fully refunded. If the charge is only partially refunded, this attribute will still be false. | refunded |
| Statement Descriptor | string | Extra information about a charge. This will appear on your customer’s credit card statement. | statement_descriptor |
| Status | string | The status of the payment is either succeeded, pending, or failed. | status |

### ListInvoiceItems_Response
data

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | string | The id of the invoice item. | id |
| Amount | int32 | A positive integer in the smallest currency unit representing the total amount for the invoice item. | amount |
| Currency | string | 3-letter ISO code representing the currency in which the invoice item was made. | currency |
| Customer | string | The customer id used for the invoice item. | customer |
| Date | date-time | The date of the invoice item. | date |
| description | string | The description of the invoice item. | description |
| Discountable | boolean | If true, discounts will apply to this invoice item. Always false for prorations. | discountable |
| Invoice | string | The id of the invoice the invoice item was added to. | invoice |
| Plan | string | If the invoice item is a proration, the plan of the subscription that the proration was computed for. | plan |
| Proration | boolean | Whether or not the invoice item was created automatically as a proration adjustment when the customer switched plans. | proration |
| Quantity | string | If the invoice item is a proration, the quantity of the subscription that the proration was computed for. | quantity |
| Subscription | string | The subscription that this invoice item has been created for, if any. | subscription |

### Product_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | string | The id of the product. | id |
| Active | boolean | Whether or not the product is currently available for purchase. | active |
| Caption | string | A short one-line description of the product, meant to be displayable to the customer. | caption |
| Created | date-time | the datetime the product was created at. | created |
| Description | string | The product’s description, meant to be displayable to the customer. | description |
| Images | array of string | A list of up to 8 URLs of images for this product, meant to be displayable to the customer. | images |
| Name | string | The product’s name, meant to be displayable to the customer. | name |
| Shippable | boolean | Whether this product is a shipped good. | shippable |
| Updated | date-time | The datetime the product was updated. | updated |
| URL | string | A URL of a publicly-accessible webpage for this product. | url |

### Customer_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | string | The id of the customer. | id |
| Account Balance | int32 | Current balance, if any, being stored on the customer’s account. | account_balance |
| Created | date-time | The datetime the customer was created. | created |
| Currency | string | The currency the customer can be charged in for recurring billing purposes. | currency |
| Delinquent | boolean | Whether or not the latest charge for the customer’s latest invoice has failed. | delinquent |
| Description | string | The description of the customer. | description |
| Discount | string | Describes the current discount active on the customer, if there is one. | discount |
| Email | string | The email of the customer. | email |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 120 seconds |

