<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# SurveyMonkey (Preview)

SurveyMonkey is the world&#x27;s leading provider of web-based survey solutions. These solutions are used by companies, organizations, and individuals to gather the insights they need to make more informed decisions.


# Actions

## Get a survey
Get details of a specific survey.

**Operation Id:** GetSurvey

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Survey Id | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Survey](#survey) | object |  |

___

## Schedule an existing invite message
Send or schedule to send an existing message to all message recipients.

**Operation Id:** SendMessage

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Survey Id | string | Select a survey | true |
| Collector Id | string | Select a collector | true |
| Message Id | string | Select a message | true |
| Scheduled date | date-time | Time format: yyyy-MM-ddTHH:mm:ss.fffZ (2016-07-20T08:00:59.000Z) | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [SurveyMessageResponse](#surveymessageresponse) | object |  |

___

# Triggers

## When a new survey is created
Triggers a new flow when a survey is created.

**Operation Id:** OnSurveyCreated

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [NewSurveys](#newsurveys) | array |  |

___

## When a new collector is created
Triggers a new flow when a collector is created.

**Operation Id:** OnSurveyCollectorCreated

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Survey Id | string | Select a survey | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [NewCollectors](#newcollectors) | array |  |

___

## When a new collector response is added
Triggers a new flow when a response is added (paid account only).

**Operation Id:** OnNewResponseAddedCollector

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Survey Id | string | Select a survey | true |
| Collector Id | string | Select a collector | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [SurveyResponses](#surveyresponses) | array |  |

___

## When a new survey response is added
Triggers a new flow when a survey response is added (paid account only).

**Operation Id:** OnNewResponseAddedSurvey

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Survey Id | string | Select a survey | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [SurveyResponses](#surveyresponses) | array |  |

___


## Objects

### Surveys


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| data | array of object |  | data |
| Link | string | Link to the survey. | data.href |
| Survey Id | string | The survey identifier. | data.id |
| Title | string | The title of the survey. | data.title |

### NewSurveys


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Link | string | Link to the survey. | href |
| Survey Id | string | The survey identifier. | id |
| Title | string | The title of the survey. | title |

### NewCollectors


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Link | string | Link to survey collector. | href |
| Collector Id | string | The collector identifier. | id |
| Name | string | The name of the collector. | name |

### SurveyCollectors


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| data | array of object |  | data |
| Link | string | Link to collector. | data.href |
| Name | string | The name of the collector. | data.name |
| Collector Id | string | The collector identifier. | data.id |

### SurveyCollector


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Status | string | The status of the survey. | status |
| Survey Redirect Url | string | Redirect to this url upon survey completion. | redirect_url |
| Thank You Message | string | Message for thank you page. | thank_you_message |
| Response Count | int32 | The number of survey responses. | response_count |
| Closed Message | string | Message shown when a survey is closed. | closed_page_message |
| Link | string | Link to the survey collector. | href |
| Close Date | string | Close date of collector. | close_date |
| Collector Id | string | The collector identifier. | id |
| Name | string | The name of the collector. | name |
| Modified Date | date-time | The date the collector was last modified. | date_modified |
| Response Type | string | Type of response. | edit_response_type |
| Sender Email | string | Collector sender email. | sender_email |
| Created Date | date-time | The date the collector was created. | date_created |
| Disqualification Date | string | Message for disqualification page. | disqualification_message |
| Collector Type | string | Collector type: &#x27;weblink’ or &#x27;email’. | type |

### Survey


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Response Count | int32 | Number of responses survey has received. | response_count |
| Page Count | int32 | Number of pages in the survey. | page_count |
| Survey Id | string | The survey identifier. | id |
| Question Count | int32 | Number of questions in survey. | question_count |
| Survey Category | string | Survey category chosen when creating the survey. | category |
| Preview Url | string | Survey preview URL. | preview |
| Language | string | Survey language. | language |
| Modified Date | date-time | The date the survey was last modified. | date_modified |
| Title | string | The title of the survey. | title |
| Analyze Url | string | The URL for the results of the survey. | analyze_url |
| Summary Url | string | The URL for the summary of the survey. | summary_url |
| Created Date | date-time | The date the survey was created. | date_created |
| Collect Url | string | Survey collect URL. | collect_url |
| Edit Url | string | Survey edit URL. | edit_url |

### SurveyResponses


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Time Spent | int32 | Total time spent on the response. | total_time |
| Link | string | Survey response link. | href |
| IP Address | string | IP address of responder. | ip_address |
| Response Id | string | The response identifier. | id |
| Modified Date | date-time | The date the response was last modified. | date_modified |
| Response Status | string | Status of the response. | response_status |
| Custom Value | string | Custom value associated with a response. | custom_value |
| Analyze Url | string | Link to the analyze page to view the response. | analyze_url |
| Recipient Id | string | The recipient identifier. | recipient_id |
| Collector Id | string | The collector identifier. | collector_id |
| Created Date | date-time | The date the response was created. | date_created |
| Survey Id | string | The survey identifier. | survey_id |
| Collection Mode | string | Response collection mode. | collection_mode |
| Edit Url | string | Link to the survey page to edit the response. | edit_url |

### SurveyMessages


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| data | array of object |  | data |
| Message status | string | The status of the message. | data.status |
| Link | string | Link to message. | data.href |
| Type | string | Type of message. | data.type |
| Message Id | string | The message identifier. | data.id |

### SurveyMessageResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Link | string | Link to message results. | is_scheduled |
| Scheduled Date | date-time | Date message was scheduled to be sent. | scheduled_date |
| Message Body | string | The plain text body of the email message to be sent to recipients. | body |
| Subject | string | Subject of the email message to be sent to recipients. | subject |
| Recipients | array of string | List of recipient ids. | recipients |
|  | string |  | recipients |
| States | string | The recipient status. | recipient_status |
| type | string |  | type |

## Limits
Connections per account: **1**

| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 5 | 60 seconds |
| Frequency of trigger polls | 1 | 60 seconds |

