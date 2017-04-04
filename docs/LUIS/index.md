<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# LUIS (Preview)

v1.0.0

Azure cognitive services language understanding intelligent service (LUIS) lets you understand language contextually, so your apps communicate with people in the way they speak.

## Creating a connection

To connect your account, you will need the following information:

| Parameter Name | Description | Type |
|----------------|-------------|------|
| API Key | API Key | securestring |


# Actions

## Get prediction
Given some input text, this operations returns a prediction based on a pre-trained model. The prediction object returned can also be used as input for other LUIS actions.

**Operation Id:** GetPredictions

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| App Id | string | Id of the trained application. | true |
| Utterance Text | string | String to predict | true |
| Desired Intent | string | Desired top scoring intent | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [PredictResponse](#predictresponse) | object |  |

___

## Get entity by type
For a given entity type, the operation returns the best matching entity model from the LUIS prediction object.

**Operation Id:** GetTopScoringMatchingEntity

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| App Id | string | Id of the trained application | true |
| Desired Entity | string | The Desired Entity. | true |
| luisPredictionObject | string |  | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [GetTopScoringMatchingEntityResponse](#gettopscoringmatchingentityresponse) | object |  |

___


## Objects

### PredictResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| LUIS Prediction | string | Used as input for other other LUIS actions. | luisPrediciton |
| Is Desired Intent | boolean | True if the top scoring intent matches the desired intent. | isDesiredIntent |
| Desired Intent | string | Desired intent specified as input, if any. | desiredIntent |
| Utterance Text | string | String that the prediction is based off. | query |
| Name | string | Name of the intent model. | topScoringIntent.intent |
| Score | float | Percent confidence of prediction. | topScoringIntent.score |
| Intents Array | array of object | List of all predicted intents. | intents |
| Intent Name | string | Name of the intent model. | intents.intent |
| Intent Score | float | Percent confidence of prediction. | intents.score |
| Entities Array | Array of [LuisPredictResponseEntity](#luispredictresponseentity) | List of all predicted entities. | entities |

### LuisPredictResponseEntity


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Entity Value | string | Value of the corresponding entity type. | entity |
| Entity Type | string | Name of the entity model. | type |
| Entity Score | float | Percent confidence of prediction. | score |

### Apps


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [App](#app) | object |  |  |

### App


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| App ID | string | LUIS app id. | ID |
| App name | string | Name of the LUIS app. | Name |

### Intents


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Intent](#intent) | object |  |  |

### Intent


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Intent Id | string | Id of the LUIS intent model. | id |
| Intent Name | string | Name of the intent model. | name |
| Intent Type | string | Type of the intent model. | type |

### Entities


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [Entity](#entity) | object |  |  |

### Entity


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Entity Id | string | Id of the LUIS entity model. | id |
| Entity Name | string | Name of the entity model. | name |

### GetTopScoringMatchingEntityResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [LuisPredictResponseEntityMinusType](#luispredictresponseentityminustype) | object |  | entity |
| [EntityMatchInfo](#entitymatchinfo) | object |  | entityMatchInfo |

### LuisPredictResponseEntityMinusType


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Entity Value | string | Value of the corresponding entity type. | entity |
| Entity Score | float | Percent confidence of prediction. | score |
| Entity Resolution | string | The resolution of this entity. Only applies to built in entities. | resolution |

### EntityMatchInfo


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Desired Entity | string | Desired entity specified as input, if any. | desiredEntity |
| Is Entity Match | boolean | True if the specific entity was found. | isEntityMatch |
| Entity Match Count | integer | Number of entities that match the desired entity type. | entityMatchCount |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |


