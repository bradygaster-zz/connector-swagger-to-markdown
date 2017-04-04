<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# SendGrid (Preview)

v1.0

SendGrid Connection Provider lets you send email and manage marketing lists and their recipients.


# Actions

## Send email
Sends an email

**Operation Id:** SendEmailApiV3

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| From | email | Origination address of your email. Must be a valid email address from your domain | true |
| From name | string | Origination name of your email | false |
| To | email | Valid email addresses, separated by a comma | true |
| To names | string | A display name for each email address, separated by a comma | false |
| Subject | string | Subject of your email | true |
| Email body | string | Content of your email | true |
| Is Html | boolean | Specify whether the content of the email is HTML or plain text | false |
| CC | email | Valid email addresses, separated by a comma | false |
| CC names | string | A display name for each CC email address, separated by a comma | false |
| Bcc | email | Valid email addresses, separated by a comma | false |
| BCC names | string | A display name for each BCC email address, separated by a comma | false |
| Attachment | byte | Attachment file content | false |
| Attachment file name | string | Attachment file name | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [EmailResponse](#emailresponse) | object | Send Email Response |

___

## Add recipient to list
Add an individual recipient to a recipient list

**Operation Id:** AddRecipientToList

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| List id | string | Unique id of the recipient list | true |
| Recipient id | string | Unique id of the recipient | true |

#### Returns
This operation does not return anything.

___


## Objects

### EmailRequest
Email Request

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| From | string | Origination address of your email. Must be a valid email address from your domain | from |
| From name | string | Origination name of your email | fromname |
| To | email | Receiving address of your email. Must include one or more valid comma seperated email addresses | to |
| To names | string | Comma seperated receiving names of your email. Must match the number of &quot;to&quot; email addresses if specified | toname |
| Subject | string | Subject of your email | subject |
| Email body | string | Content of your email. Supported formats include plain text and HTML | body |
| Is Html | boolean | Specify whether the content of the email is HTML or plain text | ishtml |
| CC | email | CC&#x27;ed addresses of your email. Must include one or more valid comma seperated email addresses | cc |
| CC names | string | Comma seperated names of the cc&#x27;ed recipients. | ccname |
| Bcc | email | Bcc addresses of your email. Must include one or more valid comma seperated email addresses | bcc |
| Bcc names | string | Comma seperated names of the Bcc&#x27;ed recipients. | bccname |
| Reply to | email | Reply To address of your email. Must be a valid email address | replyto |
| Date header | date-time | Specify the date header of your email (Example: “Thu, 21 Dec 2000 16:01:07 +0200”). Must be a valid date | date |
| Custom headers | string | Custom email headers in json format | headers |

### EmailResponse
Send Email Response

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Status of the email sent: success/failure | string | Status message from send email response | message |

### EmailRequestV3
Email Request

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| From | email | Origination address of your email. Must be a valid email address from your domain | from |
| From name | string | Origination name of your email | fromname |
| To | email | Valid email addresses, separated by a comma | to |
| To names | string | A display name for each email address, separated by a comma | toname |
| Subject | string | Subject of your email | subject |
| Email body | string | Content of your email | text |
| Is Html | boolean | Specify whether the content of the email is HTML or plain text | ishtml |
| CC | email | Valid email addresses, separated by a comma | cc |
| CC names | string | A display name for each CC email address, separated by a comma | ccname |
| Bcc | email | Valid email addresses, separated by a comma | bcc |
| BCC names | string | A display name for each BCC email address, separated by a comma | bccname |
| Attachment | byte | Attachment file content | file |
| Attachment file name | string | Attachment file name | filename |

### RecipientLists
List Recipients Response Item

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Recipient lists | Array of [RecipientList](#recipientlist) | List of recipient lists | lists |

### RecipientList
Recipient list

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| id | int32 | Unique list id | id |
| name | string | Name | name |
| Recipient count | int32 | Recipient count | recipient_count |

### Recipients
List of recipients

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Recipient List | Array of [Recipient](#recipient) | List of recipients | recipients |

### Recipient
SendGrid recipient

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| email | email | Email address | email |
| Last | string | Last name | last_name |
| First | string | First name | first_name |
| Id | string | Unique recipient id | id |

### ScopeList
List of scopes

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Scope List | array of string | List of scopes | scopes |
|  | string |  | scopes |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 600 | 60 seconds |


