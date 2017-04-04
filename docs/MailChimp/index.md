<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# MailChimp

v1.0

MailChimp is a SaaS service that allows businesses to manage and automate email marketing activities, including sending marketing emails, automated messages and targeted campaigns.


# Actions

## New Campaign
Create a new campaign based on a Campaign Type, Recipients list and Campaign Settings (subject line, title, from_name and reply_to)

**Operation Id:** newcampaign

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Campaign Type | string | There are four types of campaigns you can create in MailChimp. A/B Split campaigns have been deprecated and variate campaigns should be used instead. Possible Values: regular, plaintext, absplit, rss, variate | true |
| List Id | string | The unique list id | true |
| Saved Segment ID | int32 | The id for an existing saved segment | false |
| Match Type | string | Segment match type: Possible Values: any, all | false |
| Campaign Subject Line | string | The subject line for the campaign | true |
| Title | string | The title of the campaign | false |
| From Name | string | The &#x27;from&#x27; name on the campaign (not an email address) | true |
| Reply To Address | string | The reply-to email address for the campaign | true |
| Conversation | boolean | Use MailChimp Conversation feature to manage out-of-office replies | false |
| To Name | string | The campaign&#x27;s custom &#x27;To&#x27; name. Typically the first name merge field | false |
| Folder ID | int32 | If the campaign is listed in a folder, the id for that folder | false |
| Authentication | boolean | Whether MailChimp authenticated the campaign. Defaults to true | false |
| Auto-Footer | boolean | Automatically append MailChimp&#x27;s default footer to the campaign | false |
| Inline CSS | boolean | Automatically inline the CSS included with the campaign content | false |
| Auto-Tweet | boolean | Automatically tweet a link to the campaign archive page when the campaign is sent | false |
|  | int32 |  | false |
| Facebook Comments | boolean | Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to true | false |
| Winning Criteria | string | The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue—or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_critera is ignored. For Multivariate Campaigns with &#x27;manual&#x27; as the winner_citeria, the winner must be chosen in the MailChimp web application | false |
| Wait Time | int32 | The number of minutes to wait before choosing the winning campaign. The value of wait_time must be greater than 0 and in whole hours, specified in minutes | false |
| Test Size | int32 | The percentage of recipients to send the test combinations to, must be a value between 10 and 100 | false |
|  | string |  | false |
|  | string |  | false |
|  | string |  | false |
|  | string |  | false |
| Opens | boolean | Whether to track opens. Defaults to true. Cannot be set to false for variate campaigns | false |
| HTML Click Tracking | boolean | Whether to track clicks in the HTML version of the campaign. Defaults to true. Cannot be set to false for variate campaigns | false |
| Plain-Text Click Tracking | boolean | Whether to track clicks in the plain-text version of the campaign. Defaults to true. Cannot be set to false for variate campaigns | false |
| MailChimp Goal Tracking | boolean | Whether to enable Goal tracking | false |
| eCommerce360 Tracking | boolean | Whether to enable eCommerce360 tracking | false |
| Google Analytics Tracking | string | The custom slug for Google Analytics tracking (max of 50 bytes) | false |
| ClickTale Analytics Tracking | string | The custom slug for ClickTale tracking (max of 50 bytes) | false |
| Salesforce Campaign | boolean | Create a campaign in a connected Salesforce account | false |
| Salesforce Note | boolean | Update contact notes for a campaign based on subscriber email addresses | false |
| Highrise Campaign | boolean | Create a campaign in a connected Highrise account | false |
| Highrise Note | boolean | Update contact notes for a campaign based on subscriber email addresses | false |
| Capsule Note | boolean | Update contact notes for a campaign based on subscriber email addresses | false |
| Feed URL | string | The URL for the RSS feed | false |
| Frequency | string | The frequency of the RSS Campaign | false |
| Constrain RSS Images | string | Whether to add CSS to images in the RSS feed to constrain their width in campaigns | false |
| Sending Hour | int32 | The hour to send the campaign in local time. Acceptable hours are 0-23. For example, ‘4’ would be 4am in your account’s default time zone | false |
| Sunday | boolean | Sends the daily RSS Campaign on Sundays | false |
| Monday | boolean | Sends the daily RSS Campaign on Mondays | false |
| Tuesday | boolean | Sends the daily RSS Campaign on Tuesdays | false |
| Wednesday | boolean | Sends the daily RSS Campaign on Wednesdays | false |
| Thursday | boolean | Sends the daily RSS Campaign on Thursdays | false |
| Friday | boolean | Sends the daily RSS Campaign on Fridays | false |
| Saturday | boolean | Sends the daily RSS Campaign on Saturdays | false |
| Weekly Sending Day | string | The day of the week to send a weekly RSS Campaign | false |
| Monthly Sending Day | float | The day of the month to send a monthly RSS Campaign. Acceptable days are 1-32, where ‘0’ is always the last day of a month. Months with fewer than the selected number of days will not have an RSS campaign sent out that day. For example, RSS Campaigns set to send on the 30th will not go out in February | false |
| Image URL | string | The url for the header image for the card | false |
| Campaign Description | string | A short summary of the campaign to display | false |
| Title | string | The title for the card. Typically the subject line of the campaign | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CampaignResponseModel](#campaignresponsemodel) | object | New Campaign Result Model |

___

## New List
Create a new list in your MailChimp account

**Operation Id:** newlist

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| List Name | string | The name of the list | true |
| Company Name | string | The company name for the list | true |
| Address Line 1 | string | The street address for the list contact | true |
| Address Line 2 | string | The street address for the list contact | false |
| City | string | The city for the list contact | true |
| State | string | The state for the list contact | true |
| Postal Code | string | The postal or zip code for the list contact | true |
| Country Code | string | A two-character ISO3166 country code. Defaults to US if invalid | true |
| Phone Number | string | The phone number for the list contact | true |
| Permission Reminder | string | Text to remind people how they signed up to this list | true |
| Use Archive Bar | boolean | Whether campaigns for this list use the Archive Bar in archives by default | false |
| Sender&#x27;s Name | string | The default from name for campaigns sent to this list | true |
| Sender&#x27;s Email Address | string | The default from email for campaigns sent to this list | true |
| Subject | string | The default subject line for campaigns sent to this list | true |
| Language | string | The default language for this lists’s forms | true |
| Notify on Subscribe | string | The email address to send subscribe notifications to | false |
| Notify on Unsubscribe | string | The email address to send unsubscribe notifications to | false |
| Allow users to choose between HTML and Plain text (true/false)? | boolean | When set to true, subscribers can choose whether they want to receive HTML or plain-text emails. When set to false, subscribers will receive HTML emails, with a plain-text alternative backup | true |
| Visibility | string | Whether this list is public or private | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CreateNewListResponseModel](#createnewlistresponsemodel) | object | Create New List Result Model |

___

## Add member to list
Add or update a list member

**Operation Id:** addmember

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| List Id | string | The unique id for the list | true |
| Email Type | string | Type of email this member asked to get (‘html’ or ‘text’) | false |
| Status | string | Subscriber’s current status. Possible Values: subscribed, unsubscribed, cleaned, pending | true |
| First Name | string | First name of the subscriber | false |
| Last Name | string | Last name of the subscriber | false |
| Language | string | If set/detected, the subscriber’s language | false |
| VIP | boolean | VIP status for subscriber | false |
| Latitude | float | The location latitude | false |
| Longitude | float | The location longitude | false |
| Email Address | string | Email address for a subscriber | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [MemberResponseModel](#memberresponsemodel) | object | Member Result Model |

___

## Remove Member from list (V1)
Delete a member from a list. (V1)

**Operation Id:** removemember

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| List Id | string | The unique id for the list | true |
| Member email | string | The email address of the member to delete | true |

#### Returns
This operation does not return anything.

___

## Update member information. (V1)
Update information for a specific list member (V1)

**Operation Id:** updatemember

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| List Id | string | The unique id for the list | true |
| Member email | string | The unique email address of the member to update | true |
| Email Type | string | Type of email this member asked to get (‘html’ or ‘text’) | false |
| Status | string | Subscriber’s current status. Possible Values: subscribed, unsubscribed, cleaned, pending | true |
| First Name | string | First name of the subscriber | false |
| Last Name | string | Last name of the subscriber | false |
| Language | string | If set/detected, the subscriber’s language | false |
| VIP | boolean | VIP status for subscriber | false |
| Latitude | float | The location latitude | false |
| Longitude | float | The location longitude | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [MemberResponseModel](#memberresponsemodel) | object | Member Result Model |

___

## Remove Member from list (V2)
Delete a member from a list. (V2)

**Operation Id:** removemember_v2

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| List Id | string | The unique id for the list | true |
| Member email | string | The email address of the member to delete | true |

#### Returns
This operation does not return anything.

___

## Update member information (V2)
Update information for a specific list member. (V2)

**Operation Id:** updatemember_v2

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| List Id | string | The unique id for the list | true |
| Member email | string | The unique email address of the member to update | true |
| Email Type | string | Type of email this member asked to get (‘html’ or ‘text’) | false |
| Status | string | Subscriber’s current status. Possible Values: subscribed, unsubscribed, cleaned, pending | true |
| First Name | string | First name of the subscriber | false |
| Last Name | string | Last name of the subscriber | false |
| Language | string | If set/detected, the subscriber’s language | false |
| VIP | boolean | VIP status for subscriber | false |
| Latitude | float | The location latitude | false |
| Longitude | float | The location longitude | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [MemberResponseModel](#memberresponsemodel) | object | Member Result Model |

___

# Triggers

## When a Member has been added to a list
Triggers a workflow when a new member has been added to a list

**Operation Id:** OnMemberSubscribed

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| List ID | string | The unique id for the list | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [GetMembersResponseModel](#getmembersresponsemodel) | object | Response when getting members in a list |

___

## When a new list is created
Triggers a workflow when a new list is created

**Operation Id:** OnCreateList

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [GetListsResponseModel](#getlistsresponsemodel) | object | Response when getting lists |

___


## Objects

### NewCampaignRequest
Body parameters to create a new campaign

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Campaign Type | string | There are four types of campaigns you can create in MailChimp. A/B Split campaigns have been deprecated and variate campaigns should be used instead. Possible Values: regular, plaintext, absplit, rss, variate | type |
| [Recipient](#recipient) | object | Settings for the campaign | recipients |
| [Settings](#settings) | object | Settings for the campaign | settings |
| [Variate_Settings](#variatesettings) | object | Settings for the campaign | variate_settings |
| [Tracking](#tracking) | object | Settings for the campaign | tracking |
| [RSS_Opts](#rssopts) | object | RSS options for a campaign | rss_opts |
| [Social_Card](#socialcard) | object | Settings for the campaign | social_card |

### Recipient
Settings for the campaign

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| List Id | string | The unique list id | list_id |
| [Segment_Opts](#segmentopts) | object | An object representing all segmentation options | segment_opts |

### Settings
Settings for the campaign

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Campaign Subject Line | string | The subject line for the campaign | subject_line |
| Title | string | The title of the campaign | title |
| From Name | string | The &#x27;from&#x27; name on the campaign (not an email address) | from_name |
| Reply To Address | string | The reply-to email address for the campaign | reply_to |
| Conversation | boolean | Use MailChimp Conversation feature to manage out-of-office replies | use_conversation |
| To Name | string | The campaign&#x27;s custom &#x27;To&#x27; name. Typically the first name merge field | to_name |
| Folder ID | int32 | If the campaign is listed in a folder, the id for that folder | folder_id |
| Authentication | boolean | Whether MailChimp authenticated the campaign. Defaults to true | authenticate |
| Auto-Footer | boolean | Automatically append MailChimp&#x27;s default footer to the campaign | auto_footer |
| Inline CSS | boolean | Automatically inline the CSS included with the campaign content | inline_css |
| Auto-Tweet | boolean | Automatically tweet a link to the campaign archive page when the campaign is sent | auto_tweet |
| Auto Post to Facebook | array of int32 | An array of Facebook page ids to auto-post to | auto_fb_post |
|  | int32 |  | auto_fb_post |
| Facebook Comments | boolean | Allows Facebook comments on the campaign (also force-enables the Campaign Archive toolbar). Defaults to true | fb_comments |

### Variate_Settings
Settings for the campaign

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Winning Criteria | string | The combination that performs the best. This may be determined automatically by click rate, open rate, or total revenue—or you may choose manually based on the reporting data you find the most valuable. For Multivariate Campaigns testing send_time, winner_critera is ignored. For Multivariate Campaigns with &#x27;manual&#x27; as the winner_citeria, the winner must be chosen in the MailChimp web application | winner_criteria |
| Wait Time | int32 | The number of minutes to wait before choosing the winning campaign. The value of wait_time must be greater than 0 and in whole hours, specified in minutes | wait_time |
| Test Size | int32 | The percentage of recipients to send the test combinations to, must be a value between 10 and 100 | test_size |
| Subject Lines | array of string | The possible subject lines to test. If no subject lines are provided, settings.subject_line will be used | subject_lines |
|  | string |  | subject_lines |
| Send Times | array of string | The possible send times to test. The times provided should be in the format YYYY-MM-DD HH:MM:SS. If send_times are provided to test, the test_size will be set to 100% and winner_criteria will be ignored | send_times |
|  | string |  | send_times |
| From Names | array of string | The possible from names. The number of from_names provided must match the number of reply_to_addresses. If no from_names are provided, settings.from_name will be used | from_names |
|  | string |  | from_names |
| Reply To Addresses | array of string | The possible from names. The number of from_names provided must match the number of reply_to_addresses. If no from_names are provided, settings.from_name will be used | reply_to_addresses |
|  | string |  | reply_to_addresses |

### Tracking
Settings for the campaign

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Opens | boolean | Whether to track opens. Defaults to true. Cannot be set to false for variate campaigns | opens |
| HTML Click Tracking | boolean | Whether to track clicks in the HTML version of the campaign. Defaults to true. Cannot be set to false for variate campaigns | html_clicks |
| Plain-Text Click Tracking | boolean | Whether to track clicks in the plain-text version of the campaign. Defaults to true. Cannot be set to false for variate campaigns | text_clicks |
| MailChimp Goal Tracking | boolean | Whether to enable Goal tracking | goal_tracking |
| eCommerce360 Tracking | boolean | Whether to enable eCommerce360 tracking | ecomm360 |
| Google Analytics Tracking | string | The custom slug for Google Analytics tracking (max of 50 bytes) | google_analytics |
| ClickTale Analytics Tracking | string | The custom slug for ClickTale tracking (max of 50 bytes) | clicktale |
| [Salesforce](#salesforce) | object | Salesforce tracking options for a campaign. Must be using MailChimp’s built-in Salesforce integration | salesforce |
| [Highrise](#highrise) | object | Highrise tracking options for a campaign. Must be using MailChimp’s built-in Highrise integration | highrise |
| [Capsule](#capsule) | object | Capsule tracking options for a campaign. Must be using MailChimp’s built-in Capsule integration | capsule |

### RSS_Opts
RSS options for a campaign

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Feed URL | string | The URL for the RSS feed | feed_url |
| Frequency | string | The frequency of the RSS Campaign | frequency |
| Constrain RSS Images | string | Whether to add CSS to images in the RSS feed to constrain their width in campaigns | constrain_rss_img |
| [Schedule](#schedule) | object | The schedule for sending the RSS Campaign | schedule |

### Social_Card
Settings for the campaign

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Image URL | string | The url for the header image for the card | image_url |
| Campaign Description | string | A short summary of the campaign to display | description |
| Title | string | The title for the card. Typically the subject line of the campaign | title |

### Segment_Opts
An object representing all segmentation options

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Saved Segment ID | int32 | The id for an existing saved segment | saved_segment_id |
| Match Type | string | Segment match type: Possible Values: any, all | match |

### Salesforce
Salesforce tracking options for a campaign. Must be using MailChimp’s built-in Salesforce integration

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Salesforce Campaign | boolean | Create a campaign in a connected Salesforce account | campaign |
| Salesforce Note | boolean | Update contact notes for a campaign based on subscriber email addresses | notes |

### Highrise
Highrise tracking options for a campaign. Must be using MailChimp’s built-in Highrise integration

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Highrise Campaign | boolean | Create a campaign in a connected Highrise account | campaign |
| Highrise Note | boolean | Update contact notes for a campaign based on subscriber email addresses | notes |

### Capsule
Capsule tracking options for a campaign. Must be using MailChimp’s built-in Capsule integration

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Capsule Note | boolean | Update contact notes for a campaign based on subscriber email addresses | notes |

### Schedule
The schedule for sending the RSS Campaign

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Sending Hour | int32 | The hour to send the campaign in local time. Acceptable hours are 0-23. For example, ‘4’ would be 4am in your account’s default time zone | hour |
| [Daily_Send](#dailysend) | object | The days of the week to send a daily RSS Campaign. | daily_send |
| Weekly Sending Day | string | The day of the week to send a weekly RSS Campaign | weekly_send_day |
| Monthly Sending Day | float | The day of the month to send a monthly RSS Campaign. Acceptable days are 1-32, where ‘0’ is always the last day of a month. Months with fewer than the selected number of days will not have an RSS campaign sent out that day. For example, RSS Campaigns set to send on the 30th will not go out in February | monthly_send_date |

### Daily_Send
The days of the week to send a daily RSS Campaign.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Sunday | boolean | Sends the daily RSS Campaign on Sundays | sunday |
| Monday | boolean | Sends the daily RSS Campaign on Mondays | monday |
| Tuesday | boolean | Sends the daily RSS Campaign on Tuesdays | tuesday |
| Wednesday | boolean | Sends the daily RSS Campaign on Wednesdays | wednesday |
| Thursday | boolean | Sends the daily RSS Campaign on Thursdays | thursday |
| Friday | boolean | Sends the daily RSS Campaign on Fridays | friday |
| Saturday | boolean | Sends the daily RSS Campaign on Saturdays | saturday |

### CampaignResponseModel
New Campaign Result Model

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Campaign ID | string | A string that uniquely identifies this campaign | id |
| Campaign Type | string | There are four types of campaigns you can create in MailChimp. A/B Split campaigns have been deprecated and variate campaigns should be used instead | type |
| Create Time | string | The date and time the campaign was created | create_time |
| Archive URL | string | The link to the campaign’s archive version | archive_url |
| Status | string | The link to the campaign’s archive version | status |
| Emails Sent | int32 | The total number of emails sent for this campaign | emails_sent |
| Send Time | string | The time and date a campaign was sent | send_time |
| Content Type | string | How the campaign’s content is put together (‘template’, ‘drag_and_drop’, ‘html’, ‘url’) | content_type |
| List | Array of [Recipient](#recipient) | List settings for the campaign | recipient |
| [Settings](#settings) | object | Settings for the campaign | settings |
| [Variate_Settings](#variatesettings) | object | Settings for the campaign | variate_settings |
| [Tracking](#tracking) | object | Settings for the campaign | tracking |
| [RSS_Opts](#rssopts) | object | RSS options for a campaign | rss_opts |
| [AB_Split_Opts](#absplitopts) | object | A/B Testing options for a campaign | ab_split_opts |
| [Social_Card](#socialcard) | object | Settings for the campaign | social_card |
| [Report_Summary](#reportsummary) | object | For sent campaigns, a summary of opens, clicks, and unsubscribes | report_summary |
| [Delivery_Status](#deliverystatus) | object | Updates on campaigns in the process of sending | delivery_status |
|  | Array of [Link](#link) | A list of link types and descriptions for the API schema documents | _links |

### AB_Split_Opts
A/B Testing options for a campaign

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Split Test | string | The type of AB split to run | split_test |
| Pick Winner | string | How we should evaluate a winner. Based on &#x27;opens&#x27;, &#x27;clicks&#x27;, or &#x27;manual&#x27; | pick_winner |
| Wait Time | string | How unit of time for measuring the winner (&#x27;hours&#x27; or &#x27;days&#x27;). This cannot be changed after a campaign is sent | wait_units |
| Wait Time | int32 | The amount of time to wait before picking a winner. This cannot be changed after a campaign is sent | wait_time |
| Split Size | int32 | The size of the split groups. Campaigns split based on &#x27;schedule&#x27; are forced to have a 50/50 split. Valid split integers are between 1-50 | split_size |
| From Name Group A | string | For campaigns split on &#x27;From Name&#x27;, the name for Group A | from_name_a |
| From Name Group B | string | For campaigns split on &#x27;From Name&#x27;, the name for Group B | from_name_b |
| Reply Email Group A | string | For campaigns split on ‘From Name’, the reply-to address for Group A | reply_email_a |
| Reply Email Group B | string | For campaigns split on ‘From Name’, the reply-to address for Group B | reply_email_b |
| Subject Line Group A | string | For campaigns split on ‘Subject Line’, the subject line for Group A | subject_a |
| Subject Line Group B | string | For campaigns split on ‘Subject Line’, the subject line for Group B | subject_b |
| Send Time Group A | string | The send time for Group A | send_time_a |
| Send Time Group B | string | The send time for Group B | send_time_b |
| Send Time Winner | string | The send time for the winning version | send_time_winner |

### Report_Summary
For sent campaigns, a summary of opens, clicks, and unsubscribes

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Automation Opens | int32 | The total number of opens for a campaign | opens |
| Unique Opens | int32 | The number of unique opens | unique_opens |
| Open Rate | float | The number of unique opens divided by the total number of successful deliveries | open_rate |
| Total Clicks | int32 | The total number of clicks for an campaign | clicks |
| Unique Subscriber Clicks | float | The number of unique clicks | subscriber_clicks |
| Click Rate | float | The number of unique clicks divided by the total number of successful deliveries | click_rate |

### Delivery_Status
Updates on campaigns in the process of sending

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Delivery Staut Enabled | boolean | Whether Campaign Delivery Status is enabled for this account and campaign | enabled |
| Campaign Cancelable | boolean | Whether a campaign send can be canceled | can_cancel |
| Campaign Delivery Status | string | The current state of a campaign delivery | status |
| Emails Sent | int32 | The total number of emails confirmed sent for this campaign so far | emails_sent |
| Emails Canceled | int32 | The total number of emails canceled for this campaign | emails_canceled |

### Link
Capsule tracking options for a campaign. Must be using MailChimp’s built-in Capsule integration

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Rel | string | As with an HTML ‘rel’ attribute, this describes the type of link | rel |
| Href | string | This property contains a fully-qualified URL that can be called to retrieve the linked resource or perform the linked action | href |
| Method | string | The HTTP method that should be used when accessing the URL defined in ‘href’. (GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD) | method |
| Target Schema | string | For GETs, this is a URL representing the schema that the response should conform to | targetSchema |
| Schema | string | For HTTP methods that can receive bodies (POST and PUT), this is a URL representing the schema that the body should conform to | schema |

### NewListRequest
Body parameters to create a new campaign

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| List Name | string | The name of the list | name |
| [Contact](#contact) | object | Capsule tracking options for a campaign. Must be using MailChimp’s built-in Capsule integration | contact |
| Permission Reminder | string | Text to remind people how they signed up to this list | permission_reminder |
| Use Archive Bar | boolean | Whether campaigns for this list use the Archive Bar in archives by default | use_archive_bar |
| [Campaign_Defaults](#campaigndefaults) | object | Capsule tracking options for a campaign. Must be using MailChimp’s built-in Capsule integration | campaign_defaults |
| Notify on Subscribe | string | The email address to send subscribe notifications to | notify_on_subscribe |
| Notify on Unsubscribe | string | The email address to send unsubscribe notifications to | notify_on_unsubscribe |
| Allow users to choose between HTML and Plain text (true/false)? | boolean | When set to true, subscribers can choose whether they want to receive HTML or plain-text emails. When set to false, subscribers will receive HTML emails, with a plain-text alternative backup | email_type_option |
| Visibility | string | Whether this list is public or private | visibility |

### Contact
Capsule tracking options for a campaign. Must be using MailChimp’s built-in Capsule integration

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Company Name | string | The company name for the list | company |
| Address Line 1 | string | The street address for the list contact | address1 |
| Address Line 2 | string | The street address for the list contact | address2 |
| City | string | The city for the list contact | city |
| State | string | The state for the list contact | state |
| Postal Code | string | The postal or zip code for the list contact | zip |
| Country Code | string | A two-character ISO3166 country code. Defaults to US if invalid | country |
| Phone Number | string | The phone number for the list contact | phone |

### Campaign_Defaults
Capsule tracking options for a campaign. Must be using MailChimp’s built-in Capsule integration

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Sender&#x27;s Name | string | The default from name for campaigns sent to this list | from_name |
| Sender&#x27;s Email Address | string | The default from email for campaigns sent to this list | from_email |
| Subject | string | The default subject line for campaigns sent to this list | subject |
| Language | string | The default language for this lists’s forms | language |

### CreateNewListResponseModel
Create New List Result Model

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| List ID | string | A string that uniquely identifies this list | id |
| List Name | string | The name of the list | name |
| [Contact](#contact) | object | Capsule tracking options for a campaign. Must be using MailChimp’s built-in Capsule integration | contact |
| Permission Reminder | string | The permission reminder for the list | permission_reminder |
| Use Archive Bar | boolean | Whether campaigns for this list use the Archive Bar in archives by default | use_archive_bar |
| [Campaign_Defaults](#campaigndefaults) | object | Capsule tracking options for a campaign. Must be using MailChimp’s built-in Capsule integration | campaign_defaults |
| Notify on Subscribe | string | The email address to send subscribe notifications to | notify_on_subscribe |
| Notify on Unsubscribe | string | The email address to send unsubscribe notifications to | notify_on_unsubscribe |
| Creation Date | string | The date and time that this list was created | date_created |
| List Rating | int32 | An auto-generated activity score for the list (0-5) | list_rating |
| Email Type Option | boolean | Whether the list supports multiple formats for emails.When set to true, subscribers can choose whether they want to receive HTML or plain-text emails.When set to false, subscribers will receive HTML emails, with a plain-text alternative backup | email_type_option |
| Subscribe URL Short | string | Our EepURL shortened version of this list’s subscribe form | subscribe_url_short |
| Subscribe URL Long | string | The full version of this list’s subscribe form (host will vary) | subscribe_url_long |
| Beamer Address | string | The list’s Email Beamer address | beamer_address |
| Visibility | string | Whether this list is public or private | visibility |
| Modules | array of string | Any list-specific modules installed for this list | modules |
|  | string |  | modules |
| [Stats](#stats) | object | Stats for the list. Many of these are cached for at least five minutes | stats |
| Links | Array of [Link](#link) | A list of link types and descriptions for the API schema documents | _links |

### Stats
Stats for the list. Many of these are cached for at least five minutes

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Member Count | int32 | The number of active members in the list | member_count |
| Unsubscribe Count | int32 | The number of members who have unsubscribed from the list | unsubscribe_count |
| Cleaned Count | int32 | The number of members cleaned from the list | cleaned_count |
| Member Count Since Send | int32 | The number of active members in the list since the last campaign was sent | member_count_since_send |
| Unsubscribe Count Since Send | int32 | The number of members who have unsubscribed since the last campaign was sent | unsubscribe_count_since_send |
| Cleaned Count Since Send | int32 | The number of members cleaned from the list since the last campaign was sent | cleaned_count_since_send |
| Campaign Count | int32 | The number of campaigns in any status that use this list | campaign_count |
| Campaign Last Sent | int32 | The date and time the last campaign was sent to this list | campaign_last_sent |
| Merge Var Count | int32 | The number of merge vars for this list (not EMAIL, which is required) | merge_field_count |
| Average Subscription Rate | float | The average number of subscriptions per month for the list(not returned if we haven’t calculated it yet) | avg_sub_rate |
| Average Unsubscription Rate | float | The average number of unsubscriptions per month for the list(not returned if we haven’t calculated it yet) | avg_unsub_rate |
| Target Subscription Rate | float | The target number of subscriptions per month for the list to keep it growing(not returned if we haven’t calculated it yet) | target_sub_rate |
| Open Rate | float | The average open rate(a percentage represented as a number between 0 and 100) per campaign for the list(not returned if we haven’t calculated it yet) | open_rate |
| Click Rate | float | The average click rate(a percentage represented as a number between 0 and 100) per campaign for the list(not returned if we haven’t calculated it yet) | click_rate |
| Date of Last List Subscribe | string | The date and time of the last time someone subscribed to this list | last_sub_date |
| Date of Last List Unsubscribe | string | The date and time of the last time someone unsubscribed from this list | last_unsub_date |

### GetListsResponseModel
Response when getting lists

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Lists | Array of [CreateNewListResponseModel](#createnewlistresponsemodel) | An array of objects, each representing a list | lists |

### NewMemberInListRequest
Add a new member to the list

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Email Type | string | Type of email this member asked to get (‘html’ or ‘text’) | email_type |
| Status | string | Subscriber’s current status. Possible Values: subscribed, unsubscribed, cleaned, pending | status |
| [FirstAndLastName](#firstandlastname) | object | Merged fields containing User First name and last name | merge_fields |
| Language | string | If set/detected, the subscriber’s language | language |
| VIP | boolean | VIP status for subscriber | vip |
| [Location](#location) | object | Subscriber location information | location |
| Email Address | string | Email address for a subscriber | email_address |

### FirstAndLastName
Merged fields containing User First name and last name

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| First Name | string | First name of the subscriber | FNAME |
| Last Name | string | Last name of the subscriber | LNAME |

### Location
Subscriber location information

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Latitude | float | The location latitude | latitude |
| Longitude | float | The location longitude | longitude |

### MemberResponseModel
Member Result Model

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Email ID | string | The MD5 hash of the lowercase version of the list member’s email address | id |
| Email Address | string | Email address for a subscriber | email_address |
| Unique Email ID | string | An identifier for the address across all of MailChimp | unique_email_id |
| Email Type | string | Type of email this member asked to get (‘html’ or ‘text’). | email_type |
| Status | string | Subscriber’s current status. Possible Values: subscribed, unsubscribed, cleaned, pending | status |
| [FirstAndLastName](#firstandlastname) | object | Merged fields containing User First name and last name | merge_fields |
| [Stats](#stats) | object | Stats for the list. Many of these are cached for at least five minutes | stats |
| Signup IP | string | IP address the subscriber signed up from | ip_signup |
| Signup Timestamp | string | Date and time the subscriber signed up for the list | timestamp_signup |
| Opt-in IP | string | The IP address the subscriber used to confirm their opt-in status | ip_opt |
| Opt-in Timestamp | string | Date and time the subscribe confirmed their opt-in status | timestamp_opt |
| Member Rating | int32 | Star rating for this member, between 1 and 5 | member_rating |
| Last Changed Date | string | Date and time the member’s info was last changed | last_changed |
| Language | string | If set/detected, the subscriber’s language | language |
| VIP | boolean | VIP status for subscriber | vip |
| Email Client | string | The list member’s email client | email_client |
| [Location](#location) | object | Subscriber location information | location |
| [Last_Note](#lastnote) | object | THe most recent Note added about this member | last_note |
| List ID | string | The list id | list_id |
| Links | Array of [Link](#link) | A list of link types and descriptions for the API schema documents | _links |

### Last_Note
THe most recent Note added about this member

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Note ID | int32 | The note id | note_id |
| Created Time | string | The date the note was created | created_at |
| Author | string | The author of the note | created_by |
| Note | string | The content of the note | note |

### GetAllMembersResponseModel
Response when querying for all members in a list

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Members | Array of [MemberResponseModel](#memberresponsemodel) | An array of objects, each representing a specific list member | members |
| List Id | string | The list id | list_id |
| Total Items | int32 | The total number of items matching the query regardless of pagination | total_items |

### UpdateMemberInListRequest
Body parameters to update a member in a list

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Email Type | string | Type of email this member asked to get (‘html’ or ‘text’) | email_type |
| Status | string | Subscriber’s current status. Possible Values: subscribed, unsubscribed, cleaned, pending | status |
| [FirstAndLastName](#firstandlastname) | object | Merged fields containing User First name and last name | merge_fields |
| Language | string | If set/detected, the subscriber’s language | language |
| VIP | boolean | VIP status for subscriber | vip |
| [Location](#location) | object | Subscriber location information | location |

### GetMembersResponseModel
Response when getting members in a list

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Members | Array of [AddUserResponseModel](#adduserresponsemodel) | An array of objects, each representing a specific list member | members |

### AddUserResponseModel
New Campaign Result Model

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Email ID | string | The MD5 hash of the lowercase version of the list member’s email address | id |
| Email Address | string | Email address for a subscriber | email_address |
| Unique Email ID | string | An identifier for the address across all of MailChimp | unique_email_id |
| Email Type | string | Type of email this member asked to get (‘html’ or ‘text’). | email_type |
| Status | string | Subscriber’s current status. Possible Values: subscribed, unsubscribed, cleaned, pending | status |
| [FirstAndLastName](#firstandlastname) | object | Merged fields containing User First name and last name | merge_fields |
| [Stats](#stats) | object | Stats for the list. Many of these are cached for at least five minutes | stats |
| Signup IP | string | IP address the subscriber signed up from | ip_signup |
| Signup Timestamp | string | Date and time the subscriber signed up for the list | timestamp_signup |
| Opt-in IP | string | The IP address the subscriber used to confirm their opt-in status | ip_opt |
| Opt-in Timestamp | string | Date and time the subscribe confirmed their opt-in status | timestamp_opt |
| Member Rating | int32 | Star rating for this member, between 1 and 5 | member_rating |
| Last Changed Date | string | Date and time the member’s info was last changed | last_changed |
| Language | string | If set/detected, the subscriber’s language | language |
| VIP | boolean | VIP status for subscriber | vip |
| Email Client | string | The list member’s email client | email_client |
| [Location](#location) | object | Subscriber location information | location |
| [Last_Note](#lastnote) | object | THe most recent Note added about this member | last_note |
| List ID | string | The list id | list_id |
| Links | Array of [Link](#link) | A list of link types and descriptions for the API schema documents | _links |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |


