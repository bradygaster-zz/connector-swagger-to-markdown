<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Infusionsoft (Preview)

Infusionsoft is sales and marketing automation software built exclusively for small business success.


# Actions

## Create a task
Create a new task.

**Operation Id:** CreateTask

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Title | string | The title of the task. | true |
| Description | string | A description of the task title. | false |
| Type | string | Type of the task. | false |
| Priority | int32 | Priority of the task (1, 2, 3, etc.) | false |
| Due date (format: YYYY-MM-ddThh:mm:ss.fffZ) | date-time | Due date of the task (Ex. 2014-06-17T17:12:52.000Z | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Task_Response](#taskresponse) | object |  |

___

## Update a task
Update an existing task.

**Operation Id:** UpdateTask

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Id | integer | Id of the task. | true |
| Title | string | The title of the task. | true |
| Description | string | A description of the task title. | false |
| Type | string | Type of the task. | false |
| Priority | int32 | Priority of the task (1, 2, 3, etc.) | false |
| Due date (format: YYYY-MM-ddThh:mm:ss.fffZ) | date-time | Due date of the task (Ex. 2014-06-17T17:12:52.000Z | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Task_Response](#taskresponse) | object |  |

___

# Triggers

## When a new task is created
Trigger a flow on a new task.

**Operation Id:** OnNewTask

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Task_Response](#taskresponse) | object |  |

___

## When there is a new order
Trigger an action when there is a new order.

**Operation Id:** OnNewOrder

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ListOrders_Response](#listordersresponse) | array | orders |

___


## Objects

### Task_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | int32 | An integer that uniquely identifies this task. | id |
| Title | string | The actual task name (Do this thing). | title |
| Description | string | A description of the task defined by the user. | description |
| Type | string | A string representing the type of Task as defined by the user from a list of types editable in the Infusionsoft application. | type |
| Priority | int32 | The priority of the task. | priority |
| Completed | boolean | A boolean indicating the completed status of the task. | completed |
| URL | string | The link to the task. | url |
| Due Date | date-time | The datetime the task is due, given as GMT in ISO 8601 format. | due_date |

### ListTasks_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Tasks | array of object | Collection of tasks. | tasks |
| Id | int32 | An integer that uniquely identifies this task. | tasks.id |
| Title | string | The actual task name (Do this thing). | tasks.title |
| Description | string | A description of the task defined by the user. | tasks.description |
| Type | string | A string representing the type of Task as defined by the user from a list of types editable in the Infusionsoft application. | tasks.type |
| Priority | int32 | The priority of the task. | tasks.priority |
| Completed | boolean | A boolean indicating the completed status of the task. | tasks.completed |
| URL | string | The link to the task. | tasks.url |
| Due Date | date-time | The datetime the task is due, given as GMT in ISO 8601 format. | tasks.due_date |

### OnNewTask_Response


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Task_Response](#taskresponse) | object |  |  |

### ListOrders_Response
orders

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | int32 | The unique id of the order. | id |
| Title | string | Name given to the order. | title |
| Status | string | The status of the order. | status |
| Total | float | Total amount of the order. | total |
| First Name | string | First name of the shipping address. | shipping_information.first_name |
| Middle Name | string | Middle name of the shipping address. | shipping_information.middle_name |
| Last Name | string | Last name name of the shipping address. | shipping_information.last_name |
| Company | string | Company associated with the shipping address. | shipping_information.company |
| Phone Number | string | Phone number associated with the shipping address. | shipping_information.phone |
| Street Line 1 | string | First street line of the shipping address. | shipping_information.street1 |
| Street Line 2 | string | Second street line of the shipping address. | shipping_information.street2 |
| City | string | The city in the shipping address. | shipping_information.city |
| State | string | The state in the shipping address. | shipping_information.state |
| Zip | string | The zip code in the shipping address. | shipping_information.zip |
| Country | string | The country in the shipping address. | shipping_information.country |
| Email Address | string | Email address of the contact. | contact.email |
| First Name | string | First name of the contact. | contact.first_name |
| Last Name | string | Last name of the contact. | contact.last_name |
| Company | string | Company of the contact. | contact.company_name |
| Job Title | string | Job Title of the contact. | contact.job_title |
| Creation Date | date-time | Creation date of the order. | creation_date |
| Order Date | date-time | Order date of the order. | order_date |
| Total Paid | float | Total paid amount of the order. | total_paid |
| Total Due | float | Total amount due for the order. | total_due |

### CreateTask_Request


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Title | string | The title of the task. | title |
| Description | string | A description of the task title. | description |
| Type | string | Type of the task. | type |
| Priority | int32 | Priority of the task (1, 2, 3, etc.) | priority |
| Due date (format: YYYY-MM-ddThh:mm:ss.fffZ) | date-time | Due date of the task (Ex. 2014-06-17T17:12:52.000Z | due_date |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |
| Frequency of trigger polls | 1 | 120 seconds |

