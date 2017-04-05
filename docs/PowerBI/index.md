<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Power BI (Preview)

Power BI is a suite of business analytics tools to analyze data and share insights. Connect to get easy access to the data in your Power BI dashboards, reports and datasets.


# Actions

## Add rows to a dataset
Use Power BI REST API to add rows to a dataset.

**Operation Id:** AddRows

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Workspace | string | Workspace ID | true |
| Dataset | string | Dataset ID | true |
| Table | string | Table Name | true |
| Payload to send | dynamic |  |  |

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
| Alert title | string | The title of the alert. | alertTitle |
| Alert threshold | number | The threshold at which the alert is triggered. | alertThreshold |
| Is alert triggered | boolean | Whether or not the alert was triggered. | isAlertTriggered |
| Tile URL | string | URL linking to the dashboard tile where the alert is set up. | tileUrl |
| Tile value | number | The value of the tile. | tileValue |

### Alert


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Alert ID | string | The ID of the alert. | alertId |
| Alert title | string | The title of the alert. | alertTitle |
| Group ID | string | The ID of the group. | groupId |

### Groups


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| value | array of object |  | value |
| Group ID | string | The ID of the group. | value.id |
| Group name | string | The display name of the group. | value.name |

### Datasets


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| value | array of object |  | value |
| Dataset ID | string | The ID of the dataset. | value.id |
| Dataset name | string | The display name of the dataset. | value.name |
| Add Rows API Enabled | boolean | Whether or not this dataset supports programmatic adding of rows. | value.addRowsAPIEnabled |

### Tables


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| value | array of object |  | value |
| Table name | string | The display name of the table. | value.name |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |


