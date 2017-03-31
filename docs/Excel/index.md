![Icon](icon.png)

# Excel

v1.0

Excel Connector


# Actions

## Get tables
Retrieves table names from an Excel file

**Operation Id:** GetTables

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| File name | string | Excel file name | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [TablesList](#tableslist) | object |  |

___

## Get rows
Retrieves rows from an Excel table

**Operation Id:** GetItems

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| File name | string | Excel file name | true |
| Table name | string | Excel table name | true |
| Skip Count | int32 | Number of entries to skip (default &#x3D; 0) | false |
| Maximum Get Count | int32 | Maximum number of entries to retrieve (default &#x3D; 256) | false |

#### Returns
The outputs of this operation are dynamic.

___

## Insert row
Inserts a new row into an Excel table

**Operation Id:** PostItem

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| File name | string | Excel file name | true |
| Table name | string | Excel table name | true |

#### Returns
The outputs of this operation are dynamic.

___

## Get row
Retrieves a single row from an Excel table

**Operation Id:** GetItem

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| File name | string | Excel file name | true |
| Table name | string | Excel table name | true |
| Row id | string | Unique identifier of row to retrieve | true |

#### Returns
The outputs of this operation are dynamic.

___

## Delete row
Deletes a row from an Excel table

**Operation Id:** DeleteItem

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| File name | string | Excel file name | true |
| Table name | string | Excel table name | true |
| Row id | string | Unique identifier of the row to delete | true |

#### Returns
This operation does not return anything.

___

## Update row
Updates an existing row in an Excel table

**Operation Id:** PatchItem

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| File name | string | Excel file name | true |
| Table name | string | Excel table name | true |
| Row id | string | Unique identifier of the row to update | true |

#### Returns
The outputs of this operation are dynamic.

___


## Objects

### DataSetsMetadata


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| tabular |  |  | tabular |
| blob |  |  | blob |

### TabularDataSetsMetadata


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| source | string |  | source |
| displayName | string |  | displayName |
| urlEncoding | string |  | urlEncoding |
| tableDisplayName | string |  | tableDisplayName |
| tablePluralName | string |  | tablePluralName |

### BlobDataSetsMetadata


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| source | string |  | source |
| displayName | string |  | displayName |
| urlEncoding | string |  | urlEncoding |

### TableMetadata


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| name | string |  | name |
| title | string |  | title |
| x-ms-permission | string |  | x-ms-permission |
| x-ms-capabilities |  |  | x-ms-capabilities |
| schema |  |  | schema |

### TableCapabilitiesMetadata


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| sortRestrictions |  |  | sortRestrictions |
| filterRestrictions |  |  | filterRestrictions |

### TableSortRestrictionsMetadata


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| sortable | boolean |  | sortable |

### TableFilterRestrictionsMetadata


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| filterable | boolean |  | filterable |

### DataSetsList


| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [DataSet](#dataset) |  | value |

### DataSet


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Name | string |  | Name |
| DisplayName | string |  | DisplayName |

### Table


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Name | string |  | Name |
| DisplayName | string |  | DisplayName |

### TablesList


| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [Table](#table) |  | value |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |


