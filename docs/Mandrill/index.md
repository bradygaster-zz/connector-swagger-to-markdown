<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Mandrill

v1.0

Mandrill is a transactional email API for MailChimp users. It&#x27;s reliable, powerful, and ideal for sending data driven emails, including targeted e-commerce and personalized one-to-one messages.


# Actions

## Current user info
Return the information about the API-connected user

**Operation Id:** CurrentUser

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [UserInfo](#userinfo) | object | the user information including username, key, reputation, quota, and historical sending stats |

___

## Send mail
Send a new transactional message through Mandrill

**Operation Id:** SendMessage

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| HTML Text | string | Full HTML content to be sent | false |
| Text content of the message | string | Full text content to be sent | true |
| Subject | string | Message subject | true |
| From Email | string | Sender email address | true |
| From Name | string | Sender email name | false |
| Email | string | Email address of the recipient | true |
| Name | string | Display name of the recipient | false |
| Send As | string | Send type (to, cc, bcc) | false |
| Extra headers | string | Extra headers to add to the message (most headers are allowed) | false |
| Is this message Important (true/false)? | boolean | Whether or not this message is important, and should be delivered ahead of non-important messages | false |
| Track when message opens (true/false)? | boolean | Whether or not to turn on open tracking for the message | false |
| Track clicks for this message (true/false)? | boolean | Whether or not to turn on click tracking for the message | false |
| Fill text message if not present (true/false)? | boolean | Whether or not to automatically generate a text part for messages that are not given text | false |
| Fill HTML message if not present (true/false)? | boolean | Whether or not to automatically generate an HTML part for messages that are not given HTML | false |
| Inline CSS Styles in Html message (true/false)? | boolean | Whether or not to automatically inline all CSS styles provided in the message HTML - only for HTML documents less than 256KB in size | false |
| Strip query string from URL in aggregated data (true/false)? | boolean | Whether or not to strip the query string from URLs when aggregating tracked URL data | false |
| Show all recipients in &#x27;To&#x27; line (true/false)? | boolean | Whether or not to expose all recipients in to &quot;To&quot; header for each email | false |
| Remove content logging (true/false)? | boolean | Whether or not to log content. Set to false to remove content logging for sensitive emails | false |
| Optional BCC address | string | Optional address to receive an exact copy of each recipient&#x27;s email | false |
| Custom domaing for tracking | string | Custom domain to use for tracking opens and clicks instead of mandrillapp.com | false |
|  | string |  | false |
| MIME Type | string | MIME type of the attachment | false |
| File Name | string | File name of the attachment | false |
| Content | byte | Content of the attachment | false |
| Send At | string | When this message should be sent as a UTC timestamp in YYYY-MM-DD HH:MM:SS format. If you specify a time in the past, the message will be sent immediately. An additional fee applies for scheduled email, and this feature is only available to accounts with a positive balance. | false |
| Enable async (true/false)? | boolean | Enable a background sending mode that is optimized for bulk sending | false |
| Dedicated Ip Pool name | string | Name of the dedicated ip pool that should be used to send the message | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | Array of [SendMessageResponse](#sendmessageresponse) |  |

___

## List scheduled message
Queries your scheduled emails

**Operation Id:** ScheduledMessageInfo

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| To | string | Optional recipient email address to restrict results to | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | Array of [ListScheduledInfo](#listscheduledinfo) |  |

___


## Objects

### UserInfo
the user information including username, key, reputation, quota, and historical sending stats

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| User Name | string | Username of the user (used for SMTP authentication) | username |
| Created at | string | Date and time that the user&#x27;s Mandrill account was created as a UTC string in YYYY-MM-DD HH:MM:SS format | created_at |
| Public id | string | Unique, permanent identifier for this user | public_id |
| Reputation | int32 | Reputation of the user on a scale from 0 to 100, with 75 generally being a &quot;good&quot; reputation | reputation |
| Hourly Quota | int32 | Maximum number of emails Mandrill will deliver for this user each hour. Any emails beyond that will be accepted and queued for later delivery. Users with higher reputations will have higher hourly quotas | hourly_quota |
| Backlog | int32 | Number of emails that are queued for delivery due to exceeding your monthly or hourly quotas | backlog |
| [Stats](#stats) | object | aggregate summary of the account&#x27;s sending stats | stats |

### Stats
aggregate summary of the account&#x27;s sending stats

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [StatStruct](#statstruct) | object | Struct to hold stat information, this struct is shared across stats for today, last_7_days, last_30_days, last_60_days, last_90_days and all_time | today |
| [StatStruct](#statstruct) | object | Struct to hold stat information, this struct is shared across stats for today, last_7_days, last_30_days, last_60_days, last_90_days and all_time | last_7_days |
| [StatStruct](#statstruct) | object | Struct to hold stat information, this struct is shared across stats for today, last_7_days, last_30_days, last_60_days, last_90_days and all_time | last_30_days |
| [StatStruct](#statstruct) | object | Struct to hold stat information, this struct is shared across stats for today, last_7_days, last_30_days, last_60_days, last_90_days and all_time | last_60_days |
| [StatStruct](#statstruct) | object | Struct to hold stat information, this struct is shared across stats for today, last_7_days, last_30_days, last_60_days, last_90_days and all_time | last_90_days |
| [StatStruct](#statstruct) | object | Struct to hold stat information, this struct is shared across stats for today, last_7_days, last_30_days, last_60_days, last_90_days and all_time | all_time |

### StatStruct
Struct to hold stat information, this struct is shared across stats for today, last_7_days, last_30_days, last_60_days, last_90_days and all_time

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Sent | int32 | Number of emails sent for this user | sent |
| Hard Bounces | int32 | Number of emails hard bounced for this user | hard_bounces |
| Soft Bounces | int32 | Number of emails soft bounced for this user | soft_bounces |
| Rejects | int32 | Number of emails rejected for sending this user | rejects |
| Complaints | int32 | Number of spam complaints for this user | complaints |
| Unsubscribes | int32 | Number of unsubscribes for this user | unsubs |
| Unique Opens | int32 | Number of times emails have been opened for this user | unique_opens |
| Clicks | int32 | Number of URLS that have been clicked for this user so far today | clicks |
| Unique Clicks | int32 | Number of unique clicks for emails sent for this user | unique_clicks |

### MessageInfo
Information for the message

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Time Stamp | int32 | Unix timestamp from when this message was sent | ts |
| Message ID | string | Message&#x27;s unique id | _id |
| Sender&#x27;s Email | string | Email address of the sender | sender |
| Template Name | string | Unique name of the template userd, if any | template |
| Subject | string | Message&#x27;s subject line | subject |
| Recipient&#x27;s Email | string | Recipient email address | email |
| Tags | Array of [TagInfo](#taginfo) | List of tags in this message | tags |
| Opened | int32 | How many times has this message been opened | opens |
| Opened Details | Array of [OpenedDetail](#openeddetail) | List of individual opens for the message | opens_details |
| Clicks | string | How many times has a link been clicked in this message | clicks |
| Click Details | Array of [ClickInfo](#clickinfo) | List of individual clicks for the message | clicks_detail |
| Sending State | string | Sending status of this message: sent, bounced, rejected | state |
| SMTP Events | Array of [SmtpEventInfo](#smtpeventinfo) | Log of up to 3 smtp events for the message | smtp_events |

### TagInfo
Individual tag on a message

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Tag | string | Individual tag on a message | tag |

### OpenedDetail
Information on an individual

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Time Stamp | string | Unix timestamp from when the message was opened | ts |
| IP Address | string | IP address that generated the open | ip |
| Location | string | Approximate region and country that the opening IP is located | location |
| Opening Browser | string | Email client of browser data of the open | ua |

### ClickInfo
Information on an individual click

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Time Stamp | int32 | Unix timestamp from when the message was clicked | ts |
| Clicked URL | string | URL that was clicked on | url |
| IP Address | string | IP address that generated the click | ip |
| Location | string | Approximate region and country that the clicking IP is located | location |
| Opening Browser | string | Email client of browser data of the click | ua |

### SmtpEventInfo
Information about a specific smtp event

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Time Stamp | int32 | Unix timestamp when the event occured | ts |
| Message&#x27;s State | string | Message&#x27;s state as a result of this event | type |
| SMTP Response | string | SMTP response from the recipient&#x27;s server | diag |

### SendMessageRequest
Information for the message for each recipient containing the key &quot;email&quot; with the email address, and details of the message status for that recipient

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [SendMessageInfo](#sendmessageinfo) | object | Information on the message to send | message |
| Send At | string | When this message should be sent as a UTC timestamp in YYYY-MM-DD HH:MM:SS format. If you specify a time in the past, the message will be sent immediately. An additional fee applies for scheduled email, and this feature is only available to accounts with a positive balance. | send_at |
| Enable async (true/false)? | boolean | Enable a background sending mode that is optimized for bulk sending | async |
| Dedicated Ip Pool name | string | Name of the dedicated ip pool that should be used to send the message | ip_pool |

### SendMessageInfo
Information on the message to send

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| HTML Text | string | Full HTML content to be sent | html |
| Text content of the message | string | Full text content to be sent | text |
| Subject | string | Message subject | subject |
| From Email | string | Sender email address | from_email |
| From Name | string | Sender email name | from_name |
| Send To | Array of [RecipientInfo](#recipientinfo) | Array of recipients | to |
| Extra headers | string | Extra headers to add to the message (most headers are allowed) | headers |
| Is this message Important (true/false)? | boolean | Whether or not this message is important, and should be delivered ahead of non-important messages | important |
| Track when message opens (true/false)? | boolean | Whether or not to turn on open tracking for the message | track_opens |
| Track clicks for this message (true/false)? | boolean | Whether or not to turn on click tracking for the message | track_clicks |
| Fill text message if not present (true/false)? | boolean | Whether or not to automatically generate a text part for messages that are not given text | auto_text |
| Fill HTML message if not present (true/false)? | boolean | Whether or not to automatically generate an HTML part for messages that are not given HTML | auto_html |
| Inline CSS Styles in Html message (true/false)? | boolean | Whether or not to automatically inline all CSS styles provided in the message HTML - only for HTML documents less than 256KB in size | inline_css |
| Strip query string from URL in aggregated data (true/false)? | boolean | Whether or not to strip the query string from URLs when aggregating tracked URL data | url_strip_qs |
| Show all recipients in &#x27;To&#x27; line (true/false)? | boolean | Whether or not to expose all recipients in to &quot;To&quot; header for each email | preserve_recipients |
| Remove content logging (true/false)? | boolean | Whether or not to log content. Set to false to remove content logging for sensitive emails | view_content_link |
| Optional BCC address | string | Optional address to receive an exact copy of each recipient&#x27;s email | bcc_address |
| Custom domaing for tracking | string | Custom domain to use for tracking opens and clicks instead of mandrillapp.com | tracking_domain |
| Tags | array of string | Array of strings to tag the message with. Stats are accumulated using tags, though we only store the first 100 we see, so this should not be unique or change frequently. Tags should be 50 characters or less. Any tags starting with an underscore are reserved for internal use and will cause errors. | tags |
|  | string |  | tags |
| Attachments | Array of [AttachmentInfo](#attachmentinfo) | Attachments to add to the message | attachments |

### RecipientInfo
Single recipient&#x27;s information

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Email | string | Email address of the recipient | email |
| Name | string | Display name of the recipient | name |
| Send As | string | Send type (to, cc, bcc) | type |

### AttachmentInfo
Information for the message

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| MIME Type | string | MIME type of the attachment | type |
| File Name | string | File name of the attachment | name |
| Content | byte | Content of the attachment | content |

### SendMessageResponse
Information for the message for each recipient containing the key &quot;email&quot; with the email address, and details of the message status for that recipient

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Email | string | Email address of the recipient | email |
| Sending Status | string | Sending status of the recipient - either &quot;sent&quot;, &quot;queued&quot;, &quot;scheduled&quot;, &quot;rejected&quot;, or &quot;invalid&quot; | status |
| Reject Reason | string | Reason for the rejection if the recipient status is &quot;rejected&quot; - one of &quot;hard-bounce&quot;, &quot;soft-bounce&quot;, &quot;spam&quot;, &quot;unsub&quot;, &quot;custom&quot;, &quot;invalid-sender&quot;, &quot;invalid&quot;, &quot;test-mode-limit&quot;, &quot;unsigned&quot;, or &quot;rule | reject_reason |
| Message ID | string | message&#x27;s unique id | _id |

### ListScheduledRequest
Parameters to restrict list of scheduled emails search

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| To | string | Optional recipient email address to restrict results to | To |

### ListScheduledInfo
Information about a specific smtp event

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Recipient&#x27;s Email | string | Email address of the recipient | email |
| Recipient&#x27;s Status | string | Sending status of the recipient - either &quot;sent&quot;, &quot;queued&quot;, &quot;scheduled&quot;, &quot;rejected&quot;, or &quot;invalid&quot; | status |
| Rejection Reason | string | Reason for the rejection if the recipient status is &quot;rejected&quot; - one of &quot;hard-bounce&quot;, &quot;soft-bounce&quot;, &quot;spam&quot;, &quot;unsub&quot;, &quot;custom&quot;, &quot;invalid-sender&quot;, &quot;invalid&quot;, &quot;test-mode-limit&quot;, &quot;unsigned&quot;, or &quot;rule&quot; | reject_reason |
| Message ID | string | Message&#x27;s unique id | _id |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |


