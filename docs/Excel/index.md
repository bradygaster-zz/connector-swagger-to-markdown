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
| File name |  string  | Excel file name | true |

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
| File name |  string  | Excel file name | true |
| Table name |  string  | Excel table name | true |
| Filter Query |  string  | An ODATA filter query to restrict the number of entries | false |
| Order By |  string  | An ODATA orderBy query for specifying the order of entries | false |
| Skip Count |  int32  | Number of entries to skip (default &#x3D; 0) | false |
| Maximum Get Count |  int32  | Maximum number of entries to retrieve (default &#x3D; 256) | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ItemsList](#itemslist) | object |  |
___


## Insert row
Inserts a new row into an Excel table

**Operation Id:** PostItem

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| File name |  string  | Excel file name | true |
| Table name |  string  | Excel table name | true |
| Row | [Item](#item) | Row to insert into the specified Excel table | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Item](#item) | object |  |
___


## Get row
Retrieves a single row from an Excel table

**Operation Id:** GetItem

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| File name |  string  | Excel file name | true |
| Table name |  string  | Excel table name | true |
| Row id |  string  | Unique identifier of row to retrieve | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Item](#item) | object |  |
___


## Delete row
Deletes a row from an Excel table

**Operation Id:** DeleteItem

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| File name |  string  | Excel file name | true |
| Table name |  string  | Excel table name | true |
| Row id |  string  | Unique identifier of the row to delete | true |

#### Returns
This operation does not return anything.
___


## Update row
Updates an existing row in an Excel table

**Operation Id:** PatchItem

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| File name |  string  | Excel file name | true |
| Table name |  string  | Excel table name | true |
| Row id |  string  | Unique identifier of the row to update | true |
| Row | [Item](#item) | Row with updated values | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Item](#item) | object |  |
___




# Triggers


## Objects

### DataSetsMetadata


| Summary | Type | Description |
|---------|------|-------------|
|  |  |  |
|  |  |  |

### TabularDataSetsMetadata


| Summary | Type | Description |
|---------|------|-------------|
|  | string |  |
|  | string |  |
|  | string |  |
|  | string |  |
|  | string |  |

### BlobDataSetsMetadata


| Summary | Type | Description |
|---------|------|-------------|
|  | string |  |
|  | string |  |
|  | string |  |

### TableMetadata


| Summary | Type | Description |
|---------|------|-------------|
|  | string |  |
|  | string |  |
|  | string |  |
|  |  |  |
|  |  |  |

### TableCapabilitiesMetadata


| Summary | Type | Description |
|---------|------|-------------|
|  |  |  |
|  |  |  |
|  | Array of  |  |

### Object



### TableSortRestrictionsMetadata


| Summary | Type | Description |
|---------|------|-------------|
|  | boolean |  |
|  | Array of  |  |
|  | Array of  |  |

### TableFilterRestrictionsMetadata


| Summary | Type | Description |
|---------|------|-------------|
|  | boolean |  |
|  | Array of  |  |
|  | Array of  |  |

### DataSetsList


| Summary | Type | Description |
|---------|------|-------------|
|  | Array of  [DataSet](#dataset)  |  |

### DataSet


| Summary | Type | Description |
|---------|------|-------------|
|  | string |  |
|  | string |  |

### Table


| Summary | Type | Description |
|---------|------|-------------|
|  | string |  |
|  | string |  |

### Item


| Summary | Type | Description |
|---------|------|-------------|

### TablesList


| Summary | Type | Description |
|---------|------|-------------|
|  | Array of  [Table](#table)  |  |

### ItemsList


| Summary | Type | Description |
|---------|------|-------------|
|  | Array of  [Item](#item)  |  |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection |  |  seconds |
| Frequency of trigger polls | 1 |  seconds |

