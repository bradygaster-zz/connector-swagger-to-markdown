![Icon](icon.png)

# Power BI (Test) (Preview)

vv1

Power BI connector.


# Actions

## Add Rows (Streaming Dataset)
Add rows to a streaming dataset

**Operation Id:** AddRows

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Workspace | string | Workspace ID | true |
| Dataset | string | Dataset ID | true |
| Table | string |  | true |

#### Returns
This operation does not return anything.

___

# Triggers

## When a data driven alert is triggered
Return the status of an alert from Power BI.

**Operation Id:** CheckAlertStatus

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Alert Id | string | Choose an alert. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [EvaluatedAlert](#evaluatedalert) | object |  |

___


## Objects

### EvaluatedAlert


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| alertTitle | string |  | alertTitle |
| alertThreshold | number |  | alertThreshold |
| isAlertTriggered | boolean |  | isAlertTriggered |
| tileUrl | string |  | tileUrl |
| tileValue | number |  | tileValue |

### Alert


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| alertId | string |  | alertId |
| alertTitle | string |  | alertTitle |
| groupId | string |  | groupId |

### Groups


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| @odata.context | string |  | @odata.context |
| value | array of object |  | value |
| id | string |  | value.id |
| name | string |  | value.name |

### Datasets


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| value | array of object |  | value |
| id | string |  | value.id |
| name | string |  | value.name |
| addRowsAPIEnabled | boolean |  | value.addRowsAPIEnabled |

### Tables


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| value | array of object |  | value |
| name | string |  | value.name |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |


