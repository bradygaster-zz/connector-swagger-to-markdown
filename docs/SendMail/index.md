<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Mail

v1.0

Use the cloud-based Mail connector to send emails without Outlook for Office 365 or other email service. It can send customized text or HTML emails to multiple recipients and allows attachments.


# Actions

## Send email
Sends an email

**Operation Id:** SendEmail

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| To | string | Valid email addresses, separated by a comma | true |
| To names | string | A display name for each email address, separated by a comma | false |
| Subject | string | Subject of your email | true |
| Email body | string | Content of your email | true |
| Is Html | boolean | Specify whether the content of the email is HTML or plain text | false |
| CC | string | Valid email addresses, separated by a comma | false |
| CC names | string | A display name for each CC email address, separated by a comma | false |
| Bcc | string | Valid email addresses, separated by a comma | false |
| BCC names | string | A display name for each BCC email address, separated by a comma | false |
| Attachment | byte | Attachment file content | false |
| Attachment file name | string | Attachment file name | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [EmailResponse](#emailresponse) | object | Send email response |

___


## Objects

### EmailRequest
Email Request

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| To | string | Valid email addresses, separated by a comma | to |
| To names | string | A display name for each email address, separated by a comma | toname |
| Subject | string | Subject of your email | subject |
| Email body | string | Content of your email | text |
| Is Html | boolean | Specify whether the content of the email is HTML or plain text | ishtml |
| CC | string | Valid email addresses, separated by a comma | cc |
| CC names | string | A display name for each CC email address, separated by a comma | ccname |
| Bcc | string | Valid email addresses, separated by a comma | bcc |
| BCC names | string | A display name for each BCC email address, separated by a comma | bccname |
| Attachment | byte | Attachment file content | files |
| Attachment file name | string | Attachment file name | filenames |

### EmailResponse
Send email response

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Status of the email sent: success/failure | string | The status message from send email response | message |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection |  |  seconds |


