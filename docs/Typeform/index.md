<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Typeform (Preview)

Build beautiful, engaging, and conversational online forms, surveys, quizzes, landing pages, and much more with Typeform. 

## Creating a connection

To connect your account, you will need the following information:

| Parameter Name | Description | Type |
|----------------|-------------|------|
| API Key | API Key | securestring |


# Triggers

## When a response is submitted
Triggers when a new response is submitted.

**Operation Id:** TrigNewResponse

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Form | string | Form | true |

#### Returns
The outputs of this operation are dynamic.

___


## Objects

### ListFormsResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Form ID | string |  | id |
| Form name | string |  | name |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 15 seconds |

