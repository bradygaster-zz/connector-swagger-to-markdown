<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# FreshBooks (Preview)

FreshBooks is a cloud based small business accounting software. Send invoices, track time, manage receipts and expenses.


# Actions

## List expenses
Retrieves a list of all your expenses.

**Operation Id:** ListExpenses

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ExpenseList](#expenselist) | array | Array of expenses. |

___

## Create new expense
This operation creates a new expense in your account.

**Operation Id:** AddExpense

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account | string |  | true |
| Amount | string |  | true |
| Currency | string | 3-letter currency code. | false |
| Category | int32 | Pick an expense category. | true |
| Staff | int32 | Pick the staff member to expense. | true |
| Date | string | YYYY-MM-DD or ISO format datetime. | true |
| Vendor | string | Pick a vendor to expense. | false |
| Notes | string |  | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Expense](#expense) | object |  |

___

## Update expense
This operation is used to update an existing expense in your account.

**Operation Id:** UpdateExpense

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account | string |  | true |
| Expense Id | string |  | true |
| Amount | string |  | false |
| Currency | string | 3-letter currency code. | false |
| Category | int32 | Pick an expense category. | false |
| Staff | int32 | Pick the staff member to expense. | false |
| Date | string | YYYY-MM-DD or ISO format datetime. | false |
| Vendor | string | Pick a vendor to expense. | false |
| Notes | string |  | false |

#### Returns
This operation does not return anything.

___

## Delete expense
This operation is used to delete an existing expense from your account.

**Operation Id:** DeleteExpense

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account | string |  | true |
| Expense Id | string |  | true |

#### Returns
This operation does not return anything.

___

## Add new client
This operation creates a new client in your account.

**Operation Id:** AddClient

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account | string |  | true |
| First Name | string |  | true |
| Last Name | string |  | true |
| Organization | string |  | true |
| Email Address | string |  | false |
| Phone Number | string |  | false |
| Currency | string | 3-letter currency code. | false |
| Street Address 1 | string |  | false |
| Street Address 2 | string |  | false |
| City | string |  | false |
| Postal Code | string |  | false |
| Country | string |  | false |
| Province | string |  | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Client](#client) | object |  |

___

# Triggers

## When an expense is created or updated
Triggers when a new expense is created or an existing one is updated.

**Operation Id:** TrigUpdatedExpense

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Account | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Expense](#expense) | object |  |

___


## Objects

### BussinessInformation
business_memberships

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Name | string |  | business.name |
| Account Id | string |  | business.account_id |

### StaffList
staff

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| id | int32 | id | id |
| display_name | string | display_name | display_name |

### ExpenseList
Array of expenses.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Expense](#expense) | object |  |  |

### Expense


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Expense ID | int32 | Unique to this business id for expense. | id |
| Markup Percent | string | Decimal, percent to mark expense up. | markup_percent |
| Project Id | int32 | Id of related project, if applicable. | projectid |
| Client Id | int32 | Id of related client, if applicable. | clientid |
| Tax Percent 1 | string | Decimal, first tax percent. | taxPercent1 |
| Tax Name 1 | string | Name of first tax. | taxName1 |
| Tax Amount 1 | string | Amount of first tax. | taxAmount1 |
| Tax Percent 2 | string | Decimal, second tax percent. | taxPercent2 |
| Tax Name 2 | string | Name of second tax. | taxName2 |
| Tax Amount 2 | string | Amount of second tax. | taxAmount2 |
| Invoice Id | string | Id of related invoice, if applicable. | invoiceid |
| Status | int32 | Value from the expense status table. | status |
| Bank Name | string | Name of bank expense was imported from, if applicable. | bank_name |
| Vendor | string | Name of vendor. | vendor |
| Has Receipt | boolean | True if the receipt is attached. | has_receipt |
| External System Id | int32 | Id of related contractor system, if applicable. | ext_systemid |
| Date | string | Date of the expense. | date |
| Transaction Id | string | Id of related transaction, if applicable. | transactionid |
| Notes | string | Expense notes. | notes |
| Account Name | string | Name of related account, if applicable. | account_name |
| Amount | string | Decimal value. | amount.amount |
| Currency Code | string | 3-letter currency code. | amount.code |
| Compounded Tax | boolean | True if tax 2 was a compounded tax. | compounded_tax |
| Account Id | string | Id of expense account, if applicable. | accountid |

### Category


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| category | string | category | response.result.category.category |
| created_at | string | created_at | response.result.category.created_at |
| updated_at | string | updated_at | response.result.category.updated_at |
| categoryid | int32 | categoryid | response.result.category.categoryid |
| is_editable | boolean | is_editable | response.result.category.is_editable |
| is_cogs | boolean | is_cogs | response.result.category.is_cogs |
| parentid | string | parentid | response.result.category.parentid |
| vis_state | int32 | vis_state | response.result.category.vis_state |
| id | int32 | id | response.result.category.id |

### Client


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| First Name | string | Client&#x27;s first name. | response.result.client.fname |
| Last Name | string | Client&#x27;s last name. | response.result.client.lname |
| Fa Number | string | Client&#x27;s fax number. | response.result.client.fax |
| VAT Number | string | Value added tax number. | response.result.client.vat_number |
| VAT Name | string | Value added tax name. | response.result.client.vat_name |
| Client Id | int32 | Unique to this business id for client. | response.result.client.id |
| Province | string | Shipping address. | response.result.client.s_province |
| Country | string | Shipping address. | response.result.client.s_country |
| City | string | Shipping address. | response.result.client.s_city |
| Street | string | Shipping address. | response.result.client.s_street |
| Street 2 | string | Shipping address. | response.result.client.s_street2 |
| Postal Code | string | Shipping address. | response.result.client.s_code |
| Note | string | Notes kept by admin about client. | response.result.client.note |
| Mobile Phone | string | Mobile phone number. | response.result.client.mob_phone |
| Home Phone | string | Home phone number. | response.result.client.home_phone |
| Company Industry | string | Description of industry client is in. | response.result.client.company_industry |
| Email | string | Client&#x27;s email. | response.result.client.email |
| Username | string | Username used by client to log in. | response.result.client.username |
| Province | string | Billing address. | response.result.client.p_province |
| Country | string | Billing address. | response.result.client.p_country |
| City | string | Billing address. | response.result.client.p_city |
| Street | string | Billing address. | response.result.client.p_street |
| Postal Code | string | Billing address. | response.result.client.p_code |
| Street 2 | string | Billing address. | response.result.client.p_street2 |
| Phone | string | Billing address. | response.result.client.bus_phone |
| Size | string | Billing address. | response.result.client.company_size |
| System Id | string | Unique identifier of business client exists on. | response.result.client.accounting_systemid |
| Language | string | Shortcode indicating user language. | response.result.client.language |
| Organization | string | Name for client&#x27;s business. | response.result.client.organization |
| Currency Code | string | 3-letter shortcode for preferred currency. | response.result.client.currency_code |

### CategoryList
categories

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| category | string | category | category |
| id | int32 | id | id |

### VendorList
vendors

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| vendor | string | vendor | vendor |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 60 seconds |

