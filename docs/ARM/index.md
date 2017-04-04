<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Azure Resource Manager (Preview)

v2016-06-01

Azure Resource Manager exposes the APIs to manage all of your Azure resources.


# Actions

## Lists the subscription locations
Lists the locations available for the subscription.

**Operation Id:** Subscriptions_ListLocations

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [LocationListResult](#locationlistresult) | object | Location list operation response. |

___

## Read a subscription
Reads the details for a particular subscription.

**Operation Id:** Subscriptions_Get

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Subscription](#subscription) | object | Subscription information. |

___

## List subscriptions
Gets a list of all the subscriptions to which the principal has access.

**Operation Id:** Subscriptions_List

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [SubscriptionListResult](#subscriptionlistresult) | object | Subscription list operation response. |

___

## Read a template deployment
Reads a template deployment within a resource group.

**Operation Id:** Deployments_Get

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| Resource Group | string | Resource group name. | true |
| Deployment Name | string | The name of the resource group template deployment. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [DeploymentExtended](#deploymentextended) | object | Deployment information. |

___

## Create or update a template deployment
Create or update a named resource group template deployment. A template and parameters are expected for the request to succeed.

**Operation Id:** Deployments_CreateOrUpdate

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| Resource Group | string | Resource group name. | true |
| Deployment Name | string | The name of the deployment. | true |
| Template URI | string | URI referencing the template. | true |
| Template Content Version | string | If included it must match the ContentVersion in the template. | false |
| Parameters URI | string | URI referencing the template. | true |
| Parameters Content Version | string | If included it must match the ContentVersion in the template. | false |
| Deployment Mode | string | The deployment mode. | true |
| Detail Level | string | The debug detail level. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [DeploymentExtended](#deploymentextended) | object | Deployment information. |

___

## Delete template deployment
Deletes a resource group template deployment. The resources will not be deleted; only the metadata about the template deployment.

**Operation Id:** Deployments_Delete

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| Resource Group | string | Resource group name. | true |
| Deployment Name | string | The name of the resource group template deployment. | true |

#### Returns
This operation does not return anything.

___

## Cancel a template deployment
Cancel a currently running template deployment. All pending template operations will be suspended.

**Operation Id:** Deployments_Cancel

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| Resource Group | string | Resource group name. | true |
| Deployment Name | string | The name of the resource group template deployment. | true |

#### Returns
This operation does not return anything.

___

## Validate a template deployment
Validates a deployment template. This operation does not have side effects and can be used to test a template deployment for syntax or logical errors.

**Operation Id:** Deployments_Validate

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| Resource Group | string | Resource group name. | true |
| Deployment Name | string | The name of the resource group template deployment. | true |
| Template URI | string | URI referencing the template. | true |
| Template Content Version | string | If included it must match the ContentVersion in the template. | false |
| Parameters URI | string | URI referencing the template. | true |
| Parameters Content Version | string | If included it must match the ContentVersion in the template. | false |
| Deployment Mode | string | The deployment mode. | true |
| Detail Level | string | The debug detail level. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [DeploymentValidateResult](#deploymentvalidateresult) | object | Information from validate template deployment response. |

___

## Export deployment template
Exports a template from a past resource group deployment.

**Operation Id:** Deployments_ExportTemplate

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| Resource Group | string | Resource group name. | true |
| Deployment Name | string | The name of the resource group template deployment. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [DeploymentExportResult](#deploymentexportresult) | object | The deployment export result.  |

___

## List template deployments
Lists all the resource group template deployments. This operation is useful to know what has been provisioned thus far.

**Operation Id:** Deployments_List

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| Resource Group | string | Resource group name. | true |
| $filter | string | The filter to apply on the operation. | false |
| $top | int32 | Query parameters. If nothing is passed returns all values. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [DeploymentListResult](#deploymentlistresult) | object | List of deployments. |

___

## Read a template deployment operation
Reads a particular resource group template deployment operation. This is useful for troubleshooting failed template deployments.

**Operation Id:** DeploymentOperations_Get

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| Resource Group | string | Resource group name. | true |
| Deployment Name | string | The name of the resource group template deployment. | true |
| Operation Id | string | Operation Id. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [DeploymentOperation](#deploymentoperation) | object | Deployment operation information. |

___

## Lists template deployment operations
Lists all the template deployment operations. This is useful for troubleshooting failed template deployments.

**Operation Id:** DeploymentOperations_List

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| Resource Group | string | Resource group name. | true |
| Deployment Name | string | The name of the resource group template deployment. | true |
| $top | int32 | Query parameters. If nothing is passed returns all values. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [DeploymentOperationsListResult](#deploymentoperationslistresult) | object | List of deployment operations. |

___

## Unregister resource provider
Unregisters provider from a subscription. This operation will fail if there are any resources from that resource provider in the subscription.

**Operation Id:** Providers_Unregister

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| Resource Provider | string | Namespace of the resource provider. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Provider](#provider) | object | Resource provider information. |

___

## Register resource provider
Registers a resource provider to be used with a subscription. This will provision permissions for the service into your subscription.

**Operation Id:** Providers_Register

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| Resource Provider | string | Namespace of the resource provider. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Provider](#provider) | object | Resource provider information. |

___

## List resource providers
Lists the resource providers available for the subscription.

**Operation Id:** Providers_List

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| $top | int32 | Query parameters. If nothing is passed returns all values. | false |
| $expand | string | The $expand query parameter. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ProviderListResult](#providerlistresult) | object | List of resource providers. |

___

## Read resource provider
Reads a particular resource provider within the subscription.

**Operation Id:** Providers_Get

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| Resource Provider | string | Namespace of the resource provider. | true |
| $expand | string | The $expand query parameter. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Provider](#provider) | object | Resource provider information. |

___

## List resources by resource group
Lists all the resources under a resource group.

**Operation Id:** ResourceGroups_ListResources

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| Resource Group | string | Resource group name. | true |
| $filter | string | The filter to apply on the operation. | false |
| $expand | string | The $expand query parameter. | false |
| $top | int32 | Query parameters. If nothing is passed returns all values. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ResourceListResult](#resourcelistresult) | object | List of resources. |

___

## Read a resource group
Reads a particular resource group within the subscription.

**Operation Id:** ResourceGroups_Get

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| Resource Group | string | Resource group name. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ResourceGroup](#resourcegroup) | object | Resource group information. |

___

## Create or update a resource group
Creates or updates a resource group. The response code can be used to distinguish between a create (201) or update (200).

**Operation Id:** ResourceGroups_CreateOrUpdate

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| Resource Group Name | string | The name of the resource group to be created or updated. | true |
| Id | string | The ID of the resource group (e.g. /subscriptions/XXX/resourceGroups/YYY). | false |
| Name | string | The Name of the resource group. | false |
| Location | string | The location of the resource group. It cannot be changed after the resource group has been created. Has to be one of the supported Azure Locations, such as West US, East US, West Europe, East Asia, etc. | true |
| Managed By | string | Id of the resource that manages this resource group. | false |
| Provisioning State | string | The provisioning state. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ResourceGroup](#resourcegroup) | object | Resource group information. |

___

## Delete a resource group
Delete a particular resource group within the subscription.

**Operation Id:** ResourceGroups_Delete

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| Resource Group | string | Resource group name. | true |

#### Returns
This operation does not return anything.

___

## Update an existing resource group
Updates an existing resource group. If the resource does not exist, this request will fail.

**Operation Id:** ResourceGroups_Patch

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| Resource Group | string | Resource group name. | true |
| Id | string | The ID of the resource group (e.g. /subscriptions/XXX/resourceGroups/YYY). | false |
| Name | string | The Name of the resource group. | false |
| Location | string | The location of the resource group. It cannot be changed after the resource group has been created. Has to be one of the supported Azure Locations, such as West US, East US, West Europe, East Asia, etc. | true |
| Managed By | string | Id of the resource that manages this resource group. | false |
| Provisioning State | string | The provisioning state. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ResourceGroup](#resourcegroup) | object | Resource group information. |

___

## Export a resource group template
Exports a deployment template from an existing resource group. This can only be successful if the underlying resources have a schema defined by Microsoft.

**Operation Id:** ResourceGroups_ExportTemplate

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| Resource Group | string | Resource group name. | true |
|  | string |  | false |
| options | string | The export template options. Supported values include &#x27;IncludeParameterDefaultValue&#x27;, &#x27;IncludeComments&#x27; or &#x27;IncludeParameterDefaultValue, IncludeComments | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ResourceGroupExportResult](#resourcegroupexportresult) | object |  |

___

## List resource groups
Lists all the resource groups within the subscription. The results are paginated at 1,000+ records.

**Operation Id:** ResourceGroups_List

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| $filter | string | The filter to apply on the operation. | false |
| $top | int32 | Query parameters. If nothing is passed returns all values. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ResourceGroupListResult](#resourcegrouplistresult) | object | List of resource groups. |

___

## List resources by subscription
Reads all of the resources under a particular subscription. The results are paginated at 1,000+ records.

**Operation Id:** Resources_List

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| $filter | string | The filter to apply on the operation. | false |
| $expand | string | The $expand query parameter. | false |
| $top | int32 | Query parameters. If nothing is passed returns all values. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ResourceListResult](#resourcelistresult) | object | List of resources. |

___

## Read a resource
Reads a resource object.

**Operation Id:** Resources_GetById

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| Resource Group | string | Resource group name. | true |
| Resource Provider | string | Namespace of the resource provider. | true |
| Short Resource Id | string | The short Id of the resource, including the resource name and resource type. For example, sites/mySite | true |
| x-ms-api-version | string | Client Api Version. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [GenericResource](#genericresource) | object | Resource information. |

___

## Create or update a resource
Creates or updates a resource. The response code can be used to distinguish between a create (201) or update (200).

**Operation Id:** Resources_CreateOrUpdateById

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| Resource Group | string | Resource group name. | true |
| Resource Provider | string | Namespace of the resource provider. | true |
| Short Resource Id | string | The short Id of the resource, including the resource name and resource type. For example, sites/mySite | true |
| x-ms-api-version | string | Client Api Version. | true |
| Id | string | Resource Id | false |
| Name | string | Resource name | false |
| Type | string | Resource type | false |
| Location | string | Resource location | false |
| Id | string | The plan ID. | false |
| Publisher | string | The publisher ID. | false |
| Product | string | The offer ID. | false |
| Promotion Code | string | The promotion code. | false |
| Kind | string | The kind of the resource. | false |
| Managed By | string | Id of the resource that manages this resource. | false |
| Name | string | The sku name. | false |
| Tier | string | The sku tier. | false |
| Size | string | The sku size. | false |
| Family | string | The sku family. | false |
| Model | string | The sku model. | false |
| Capacity | int32 | The sku capacity. | false |
| Principal Id | string | The principal id of resource identity. | false |
| Tenant Id | string | The tenant id of resource. | false |
| Type | string | The identity type. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [GenericResource](#genericresource) | object | Resource information. |

___

## Delete a resource
Deletes a resource.

**Operation Id:** Resources_DeleteById

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| Resource Group | string | Resource group name. | true |
| Resource Provider | string | Namespace of the resource provider. | true |
| Short Resource Id | string | The short Id of the resource, including the resource name and resource type. For example, sites/mySite | true |
| x-ms-api-version | string | Client Api Version. | true |

#### Returns
This operation does not return anything.

___

## Create or update a subscription resource tag value
Create or update a subscription resource tag value.

**Operation Id:** Tags_CreateOrUpdateValue

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| Tag Name | string | The name of the tag. | true |
| tagValue | string | The value of the tag. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [TagValue](#tagvalue) | object | Tag information. |

___

## Delete a subscription resource tag value
Delete a subscription resource tag value.

**Operation Id:** Tags_DeleteValue

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| Tag Name | string | The name of the tag. | true |
| tagValue | string | The value of the tag. | true |

#### Returns
This operation does not return anything.

___

## Create or update a subscription resource tag name
Create or update a subscription resource tag name.

**Operation Id:** Tags_CreateOrUpdate

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| Tag Name | string | The name of the tag. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [TagDetails](#tagdetails) | object | Tag details. |

___

## Delete a subscription resource tag name
Delete a subscription resource tag name.

**Operation Id:** Tags_Delete

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |
| Tag Name | string | The name of the tag. | true |

#### Returns
This operation does not return anything.

___

## List subscription resource tags
Lists all the subscription resource tags.

**Operation Id:** Tags_List

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Subscription | string | The unique identifier for the  Microsoft Azure subscription. The subscription ID forms part of the ID for every Azure resource. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [TagsListResult](#tagslistresult) | object | List of subscription tags. |

___


## Objects

### Location
Location information.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | string | The fully qualified Id of the location. For example, /subscriptions/00000000-0000-0000-0000-000000000000/locations/westus. | id |
| Subscription Id | string | The subscription Id. | subscriptionId |
| Location Name | string | The location name. | name |
| Display Name | string | The display name of the location. | displayName |
| Latitude | string | The latitude of the location. | latitude |
| Longitude | string | The longitude of the location. | longitude |

### LocationListResult
Location list operation response.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [Location](#location) | The locations. | value |

### Subscription
Subscription information.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | string | The fully qualified Id. For example, /subscriptions/00000000-0000-0000-0000-000000000000. | id |
| Subscription Id | string | The subscription Id. | subscriptionId |
| Tenant Id | string | The tenant Id. | tenantId |
| Display Name | string | The subscription display name. | displayName |
| State | string | The subscription state. | state |
| [SubscriptionPolicies](#subscriptionpolicies) | object | Subscription policies. | subscriptionPolicies |
| Authorization Source | string | The authorization source of the request. Valid values are one or more combinations of Legacy, RoleBased, Bypassed, Direct and Management. For example, &#x27;Legacy, RoleBased&#x27;. | authorizationSource |

### SubscriptionPolicies
Subscription policies.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Location Placement Id | string | The subscription location placement Id. The Id indicates which regions are visible for a subscription. For example, a subscription with a location placement Id of Public_2014-09-01 has access to Azure public regions. | locationPlacementId |
| Quota Id | string | The subscription quota Id. | quotaId |
| Spending Limit | string | The subscription spending limit. | spendingLimit |

### SubscriptionListResult
Subscription list operation response.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [Subscription](#subscription) | The subscriptions. | value |
| Next Link | string | The URL to get the next set of results. | nextLink |

### TemplateLink
Entity representing the reference to the template.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Template URI | string | URI referencing the template. | uri |
| Template Content Version | string | If included it must match the ContentVersion in the template. | contentVersion |

### ParametersLink
Entity representing the reference to the deployment paramaters.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Parameters URI | string | URI referencing the template. | uri |
| Parameters Content Version | string | If included it must match the ContentVersion in the template. | contentVersion |

### DeploymentProperties
Deployment properties.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Template Content | object | The template content. It can be a JObject or a well formed JSON string. Use only one of Template or TemplateLink. | template |
| [TemplateLink](#templatelink) | object | Entity representing the reference to the template. | templateLink |
| Parameters | object | Deployment parameters. It can be a JObject or a well formed JSON string. Use only one of Parameters or ParametersLink. | parameters |
| [ParametersLink](#parameterslink) | object | Entity representing the reference to the deployment paramaters. | parametersLink |
| Deployment Mode | string | The deployment mode. | mode |
| [DebugSetting](#debugsetting) | object |  | debugSetting |

### DebugSetting


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Detail Level | string | The debug detail level. | detailLevel |

### Deployment
Deployment operation parameters.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [DeploymentProperties](#deploymentproperties) | object | Deployment properties. | properties |

### DeploymentExportResult
The deployment export result. 

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Template | object | The template content. | template |

### ResourceManagementErrorWithDetails


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| code | string | The error code returned from the server. | code |
| message | string | The error message returned from the server. | message |
| target | string | The target of the error. | target |
|  | Array of [ResourceManagementErrorWithDetails](#resourcemanagementerrorwithdetails) | Validation error. | details |

### AliasPathType
The type of the paths for alias. 

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| path | string | The path of an alias. | path |
| apiVersions | array of string | The api versions. | apiVersions |
|  | string |  | apiVersions |

### AliasType
The alias type. 

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| name | string | The alias name. | name |
|  | Array of [AliasPathType](#aliaspathtype) | The paths for an alias. | paths |

### ProviderResourceType
Resource type managed by the resource provider.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| resourceType | string | The resource type. | resourceType |
| locations | array of string | The collection of locations where this resource type can be created in. | locations |
|  | string |  | locations |
|  | Array of [AliasType](#aliastype) | The aliases that are supported by this resource type. | aliases |
| apiVersions | array of string | The api version. | apiVersions |
|  | string |  | apiVersions |
| properties | object | The properties. | properties |

### Provider
Resource provider information.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | string | The provider id. | id |
| Namespace | string | The namespace of the provider. | namespace |
| Registration State | string | The registration state of the provider. | registrationState |
| Resource Type | Array of [ProviderResourceType](#providerresourcetype) | The collection of provider resource types. | resourceTypes |

### BasicDependency
Deployment dependency information.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| id | string | The ID of the dependency. | id |
| resourceType | string | The dependency resource type. | resourceType |
| resourceName | string | The dependency resource name. | resourceName |

### Dependency
Deployment dependency information.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [BasicDependency](#basicdependency) | The list of dependencies. | dependsOn |
| id | string | The ID of the dependency. | id |
| resourceType | string | The dependency resource type. | resourceType |
| resourceName | string | The dependency resource name. | resourceName |

### DeploymentPropertiesExtended
Deployment properties with additional details.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| provisioningState | string | The state of the provisioning. | provisioningState |
| correlationId | string | The correlation ID of the deployment. | correlationId |
| timestamp | date-time | The timestamp of the template deployment. | timestamp |
| outputs | object | Key/value pairs that represent deploymentoutput. | outputs |
|  | Array of [Provider](#provider) | The list of resource providers needed for the deployment. | providers |
|  | Array of [Dependency](#dependency) | The list of deployment dependencies. | dependencies |
| template | object | The template content. Use only one of Template or TemplateLink. | template |
| [TemplateLink](#templatelink) | object | Entity representing the reference to the template. | templateLink |
| parameters | object | Deployment parameters. Use only one of Parameters or ParametersLink. | parameters |
| [ParametersLink](#parameterslink) | object | Entity representing the reference to the deployment paramaters. | parametersLink |
| mode | string | The deployment mode. | mode |
| [DebugSetting](#debugsetting) | object |  | debugSetting |

### DeploymentValidateResult
Information from validate template deployment response.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| [ResourceManagementErrorWithDetails](#resourcemanagementerrorwithdetails) | object |  | error |
| [DeploymentPropertiesExtended](#deploymentpropertiesextended) | object | Deployment properties with additional details. | properties |

### DeploymentExtended
Deployment information.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | string | The ID of the deployment. | id |
| Name | string | The name of the deployment. | name |
| [DeploymentPropertiesExtended](#deploymentpropertiesextended) | object | Deployment properties with additional details. | properties |

### DeploymentListResult
List of deployments.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [DeploymentExtended](#deploymentextended) | The list of deployments. | value |
| Next Link | string | The URL to get the next set of results. | nextLink |

### ProviderListResult
List of resource providers.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [Provider](#provider) | The list of resource providers. | value |
| nextLink | string | The URL to get the next set of results. | nextLink |

### GenericResource
Resource information.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | string | Resource Id | id |
| Name | string | Resource name | name |
| Type | string | Resource type | type |
| Location | string | Resource location | location |
| Tags | object | Resource tags | tags |
| [Plan](#plan) | object | Plan for the resource. | plan |
| Kind | string | The kind of the resource. | kind |
| Managed By | string | Id of the resource that manages this resource. | managedBy |
| [Sku](#sku) | object | Sku for the resource. | sku |
| [Identity](#identity) | object | Identity for the resource. | identity |
| Properties | object | The resource properties. | properties |

### Plan
Plan for the resource.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | string | The plan ID. | name |
| Publisher | string | The publisher ID. | publisher |
| Product | string | The offer ID. | product |
| Promotion Code | string | The promotion code. | promotionCode |

### Sku
Sku for the resource.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Name | string | The sku name. | name |
| Tier | string | The sku tier. | tier |
| Size | string | The sku size. | size |
| Family | string | The sku family. | family |
| Model | string | The sku model. | model |
| Capacity | int32 | The sku capacity. | capacity |

### Identity
Identity for the resource.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Principal Id | string | The principal id of resource identity. | principalId |
| Tenant Id | string | The tenant id of resource. | tenantId |
| Type | string | The identity type. | type |

### ResourceListResult
List of resources.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [GenericResource](#genericresource) | The list of resources. | value |
| Next Link | string | The URL to get the next set of results. | nextLink |

### ResourceGroup
Resource group information.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | string | The ID of the resource group (e.g. /subscriptions/XXX/resourceGroups/YYY). | id |
| Name | string | The Name of the resource group. | name |
| Location | string | The location of the resource group. It cannot be changed after the resource group has been created. Has to be one of the supported Azure Locations, such as West US, East US, West Europe, East Asia, etc. | location |
| Managed By | string | Id of the resource that manages this resource group. | managedBy |
| Tags | object | The tags attached to the resource group. | tags |
| [ResourceGroupProperties](#resourcegroupproperties) | object | The resource group properties. | properties |

### ResourceGroupProperties
The resource group properties.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Provisioning State | string | The provisioning state. | provisioningState |

### ResourceGroupListResult
List of resource groups.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [ResourceGroup](#resourcegroup) | The list of resource groups. | value |
| Next Link | string | The URL to get the next set of results. | nextLink |

### ExportTemplateRequest
Export resource group template request parameters.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| resources | array of string | The ids of the resources. The only supported string currently is &#x27;*&#x27; (all resources). Future api updates will support exporting specific resources. | resources |
|  | string |  | resources |
| options | string | The export template options. Supported values include &#x27;IncludeParameterDefaultValue&#x27;, &#x27;IncludeComments&#x27; or &#x27;IncludeParameterDefaultValue, IncludeComments | options |

### TagCount
Tag count.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Type | string | Type of count. | type |
| Value | string | Value of count. | value |

### TagValue
Tag information.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Tag Id | string | The tag ID. | id |
| Tag Value | string | The tag value. | tagValue |
| [TagCount](#tagcount) | object | Tag count. | count |

### TagDetails
Tag details.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | string | The tag ID. | id |
| Name | string | The tag name. | tagName |
| [TagCount](#tagcount) | object | Tag count. | count |
|  | Array of [TagValue](#tagvalue) | The list of tag values. | values |

### TagsListResult
List of subscription tags.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [TagDetails](#tagdetails) | The list of tags. | value |
| nextLink | string | The URL to get the next set of results. | nextLink |

### TargetResource
Target resource.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | string | The ID of the resource. | id |
| Name | string | The name of the resource. | resourceName |
| Type | string | The type of the resource. | resourceType |

### HttpMessage


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| content | object | HTTP message content. | content |

### DeploymentOperationProperties
Deployment operation properties.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| provisioningState | string | The state of the provisioning. | provisioningState |
| timestamp | date-time | The date and time of the operation. | timestamp |
| serviceRequestId | string | Deployment operation service request id. | serviceRequestId |
| statusCode | string | Operation status code. | statusCode |
| statusMessage | object | Operation status message. | statusMessage |
| [TargetResource](#targetresource) | object | Target resource. | targetResource |
| [HttpMessage](#httpmessage) | object |  | request |
| [HttpMessage](#httpmessage) | object |  | response |

### DeploymentOperation
Deployment operation information.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Id | string | Full deployment operation id. | id |
| Operation Id | string | Deployment operation id. | operationId |
| [DeploymentOperationProperties](#deploymentoperationproperties) | object | Deployment operation properties. | properties |

### DeploymentOperationsListResult
List of deployment operations.

| Summary | Type | Description | Path |
|---------|------|-------------|------|
|  | Array of [DeploymentOperation](#deploymentoperation) | The list of deployments. | value |
| Next Link | string | The URL to get the next set of results. | nextLink |

### ResourceGroupExportResult


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Template | object | The template content. | template |
| [ResourceManagementErrorWithDetails](#resourcemanagementerrorwithdetails) | object |  | error |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 1200 | 60 seconds |


