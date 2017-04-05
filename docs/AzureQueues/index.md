<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Azure Queues (Preview)

Azure Queue storage provides cloud messaging between application components. Queue storage also supports managing asynchronous tasks and building process work flows.

## Creating a connection

To connect your account, you will need the following information:

| Parameter Name | Description | Type |
|----------------|-------------|------|
| Storage Account Name | The name of your storage account | string |
| Shared Storage Key | The shared storage key of your storage account | securestring |


# Actions

## List queues
List all the queues for your storage account.

**Operation Id:** ListQueues

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [QueueArray](#queuearray) | array |  |

___

## Get messages


**Operation Id:** GetMessages

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Queue name | string | The queue to get nessages from | true |
| Number of messages | string | The number of messages to grab from the queue (default 1.) | false |
| Visibility timeout | string | The time in seconds that messages will be invisibile to other consumers (default 30) | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Messages](#messages) | object |  |

___

## Put a message on a queue
Adds a message to the given queue

**Operation Id:** PutMessage

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Queue name | string | The queue to put a message to | true |
| Message | string | The message to post | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | string |  |

___

## Delete message


**Operation Id:** DeleteMessage

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Queue name | string | The queue to delete a message from | true |
| Message ID | string | The ID of the message to delete | true |
| Pop receipt | string | A valid pop receipt value returned from an earlier call to the Get Messages | true |

#### Returns
This operation does not return anything.

___

## Create a new queue
Adds a queue to your account

**Operation Id:** PutQueue

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Queue name | string | The name of the queue to create | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | string |  |

___

# Triggers

## When a specified number of messages are in a given queue
Triggers when a specified number of messages are in the given queue.

**Operation Id:** OnMessageThresholdReached

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Queue name | string | The queue to check for messages | true |
| Threshold | int32 | The number of messages to wait for to fire the trigger. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
|  | string |  |

___

## When there are messages in a queue
Triggers any time there are messages in the queue, returning up to 32 messages.

**Operation Id:** OnMessages

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Queue name | string | The queue to check for messages | true |
| Visibility timeout | string | The time in seconds that messages will be invisibile to other consumers (default 30) | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Messages](#messages) | object |  |

___


## Objects

### Queue


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Name | string | The name of the queue | Name |

### QueueArray


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Queue](#queue) | object |  |  |

### MessagePost


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Message | string | The message to put in the queue | Message |

### Messages


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| QueueMessage | array of object |  | QueueMessagesList.QueueMessage |
| Message ID | string | The unique identifier of the message | QueueMessagesList.QueueMessage.MessageId |
| Insertion time | string | The time the message was inserted into the queue | QueueMessagesList.QueueMessage.InsertionTime |
| Expiration time | string | The time the message will expire from the queue | QueueMessagesList.QueueMessage.ExpirationTime |
| Pop receipt | string | Used to delete the message after popping it off the queue | QueueMessagesList.QueueMessage.PopReceipt |
| Next visibile time | string | The time the message will be visible to other consumers | QueueMessagesList.QueueMessage.TimeNextVisible |
| Message text | string | The text of the message | QueueMessagesList.QueueMessage.MessageText |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 500 | 60 seconds |
| Frequency of trigger polls | 1 | 60 seconds |

