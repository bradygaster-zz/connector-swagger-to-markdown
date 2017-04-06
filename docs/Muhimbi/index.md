<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Muhimbi PDF (Preview)

Convert, Merge, Watermark, Secure and OCR files.


# Actions

## Add composite watermark
Add a complex watermark to a PDF file.

**Operation Id:** composite_watermark

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Source file name | string | Optional file name (for logging purposes) | false |
| Source file content | byte | Content of the file to watermark | true |
| Watermark data | string | Watermark data in Muhimbi XML format | true |
| Fail on error | boolean | Fail on error | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [operation_response](#operationresponse) | object | Response data for all operations |

___

## Convert document
Convert a file to PDF or other format.

**Operation Id:** convert

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Source file name | string | Name of the source file including extension | true |
| Source file content | byte | Content of the file to convert | true |
| Output format | enum | Output format | true |
| Override settings | string | Optional settings using Muhimbi&#x27;s XML syntax | false |
| Template file content | byte | Optional template file content (e.g. infopath XSN file) | false |
| Fail on error | boolean | Fail on error | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [operation_response](#operationresponse) | object | Response data for all operations |

___

## Convert HTML to PDF
Convert URLs or HTML to PDF.

**Operation Id:** convert_html

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Source URL or HTML | string | HTML fragment or URL to convert | true |
| Page orientation | enum | Page orientation | false |
| User name | string | User name | false |
| Password | password | Password | false |
| Authentication type | enum | Authentication type | false |
| Fail on error | boolean | Fail on error | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [operation_response](#operationresponse) | object | Response data for all operations |

___

## Copy metadata (SharePoint only)
Copy metadata and set content type.

**Operation Id:** copy_metadata

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Site url | string | SharePoint site url (example: http://contoso.sharepoint.com/sites/mysite) | true |
| Source file url | string | Path to the source file | true |
| Destination file path | string | Path to the destination file | true |
| User name | string | User name to log in to the SharePoint site | false |
| Password | string | Password to log in to the SharePoint site | false |
| Fields to copy | string | Optional comma separated list of fields | false |
| Destination content type | string | Optional content type for the destination file | false |
| Fail on error | boolean | Fail on error | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [operation_response_common](#operationresponsecommon) | object | Response data for all operations |

___

## Add ellipse watermark
Add an ellipse watermark to a PDF file.

**Operation Id:** ellipse_watermark

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Source file name | string | Optional file name (for logging purposes) | false |
| Source file content | byte | Content of the file to watermark | true |
| Position | enum | Watermark position on the page | true |
| Width | string | Width of the watermark (in Pts, 1/72 of an inch) | true |
| Height | string | Height of the watermark (in Pts, 1/72 of an inch) | true |
| X Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | X Coordinate of the watermark (in Pts, 1/72 of an inch) | false |
| Y Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | Y Coordinate of the watermark (in Pts, 1/72 of an inch) | false |
| Layer | enum | Watermark layer | false |
| Rotation | string | Angle of rotation | false |
| Opacity | string | Opacity in % (100 is fully visible and 1 is barely visible) | false |
| Fill color | string | Color in #RRGGBB notation | false |
| Line color | string | Color in #RRGGBB notation | false |
| Line width | string | Width of the line (in Pts, 1/72 of an inch) | false |
| Watermark start page | int32 | Number of the first page the watermark applies to | false |
| Watermark end page | int32 | Number of the last page the watermark applies to | false |
| Watermark page interval | int32 | Which pages to display the watermark on (1&#x3D;every page, 2&#x3D;every other, etc) | false |
| Watermark page orientation | enum | Orientation of pages the watermark applies to. | false |
| Fail on error | boolean | Fail on error | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [operation_response](#operationresponse) | object | Response data for all operations |

___

## Add image watermark
Add an image based watermark to a PDF file.

**Operation Id:** image_watermark

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Source file name | string | Optional file name (for logging purposes) | false |
| Source file content | byte | Content of the file to watermark | true |
| Image | byte | Image content or URL | true |
| Position | enum | Watermark position on the page | true |
| Width | string | Width of the watermark (in Pts, 1/72 of an inch) | true |
| Height | string | Height of the watermark (in Pts, 1/72 of an inch) | true |
| X Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | X Coordinate of the watermark (in Pts, 1/72 of an inch) | false |
| Y Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | Y Coordinate of the watermark (in Pts, 1/72 of an inch) | false |
| Layer | enum | Watermark layer | false |
| Rotation | string | Angle of rotation | false |
| Opacity | string | Opacity in % (100 is fully visible and 1 is barely visible) | false |
| Watermark background color | string | Color in #RRGGBB notation | false |
| Watermark outline color | string | Color in #RRGGBB notation | false |
| Watermark outline width | string | Width of the watermark outline (in Pts, 1/72 of an inch) | false |
| Watermark start page | int32 | Number of the first page the watermark applies to | false |
| Watermark end page | int32 | Number of the last page the watermark applies to | false |
| Watermark page interval | int32 | Which pages to display the watermark on (1&#x3D;every page, 2&#x3D;every other, etc) | false |
| Watermark page orientation | enum | Orientation of pages the watermark applies to. | false |
| Fail on error | boolean | Fail on error | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [operation_response](#operationresponse) | object | Response data for all operations |

___

## Add line watermark
Add a line watermark to a PDF file.

**Operation Id:** line_watermark

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Source file name | string | Optional file name (for logging purposes) | false |
| Source file content | byte | Content of the file to watermark | true |
| Position | enum | Watermark position on the page | true |
| X Coordinate (start) | string | Start X Coordinate of the line (in Pts, 1/72 of an inch) | true |
| Y Coordinate (start) | string | Start Y Coordinate of the line (in Pts, 1/72 of an inch) | true |
| X Coordinate (end) | string | End X Coordinate of the line (in Pts, 1/72 of an inch) | true |
| Y Coordinate (end) | string | End Y Coordinate of the line (in Pts, 1/72 of an inch) | true |
| Layer | enum | Watermark layer | false |
| Rotation | string | Angle of rotation | false |
| Opacity | string | Opacity in % (100 is fully visible and 1 is barely visible) | false |
| Line color | string | Color in #RRGGBB notation | false |
| Line width | string | Width of the line (in Pts, 1/72 of an inch) | false |
| Watermark start page | int32 | Number of the first page the watermark applies to | false |
| Watermark end page | int32 | Number of the last page the watermark applies to | false |
| Watermark page interval | int32 | Which pages to display the watermark on (1&#x3D;every page, 2&#x3D;every other, etc) | false |
| Watermark page orientation | enum | Orientation of pages the watermark applies to. | false |
| Fail on error | boolean | Fail on error | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [operation_response](#operationresponse) | object | Response data for all operations |

___

## Merge documents
Merge multiple files into a single PDF.

**Operation Id:** merge_to_pdf

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Source file name - 1 | string | Name of the source file including extension | true |
| Source file content - 1 | byte | Content of the file to merge | true |
| Source file name - 2 | string | Name of the source file including extension | true |
| Source file content - 2 | byte | Content of the file to merge | true |
| Source file name - 3 | string | Name of the source file including extension | false |
| Source file content - 3 | byte | Content of the file to merge | false |
| Source file name - 4 | string | Name of the source file including extension | false |
| Source file content - 4 | byte | Content of the file to merge | false |
| Source file name - 5 | string | Name of the source file including extension | false |
| Source file content - 5 | byte | Content of the file to merge | false |
| Each document | enum | Document start page | false |
| Fail on error | boolean | Fail on error | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [operation_response](#operationresponse) | object | Response data for all operations |

___

## Convert to OCRed PDF
Convert a file to an OCRed PDF.

**Operation Id:** ocr_pdf

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Source file name | string | Name of the source file including extension | true |
| Source file content | byte | Content of the file to OCR | true |
| Language | enum | Language | false |
| Performance | enum | Performance | false |
| Blacklist / whitelist | enum | Characters option | false |
| Characters | string | Characters to blacklist or whitelist | false |
| Use pagination | boolean | Paginate | false |
| Regions | string | Limit the area to OCR to one or more specific areas | false |
| Fail on error | boolean | Fail on error | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [operation_response](#operationresponse) | object | Response data for all operations |

___

## Extract text using OCR
Extract text from a file using OCR.

**Operation Id:** ocr_text

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Source file name | string | Name of the source file including extension | true |
| Source file content | byte | Content of the file to OCR | true |
| Language | enum | Languate | false |
| X Coordinate | string | X Coordinate (in Pts, 1/72 of an inch) | false |
| Y Coordinate | string | Y Coordinate (in Pts, 1/72 of an inch) | false |
| Width | string | Width of the OCR area (in Pts, 1/72 of an inch) | false |
| Height | string | Height of the OCR area (in Pts, 1/72 of an inch) | false |
| Page number | string | Page number (leave blank to OCR all pages) | false |
| Performance | enum | Performance () | false |
| Blacklist / whitelist | enum | Characters option | false |
| Characters | string | Characters to blacklist or whitelist | false |
| Use pagination | boolean | Paginate | false |
| Fail on error | boolean | Fail on error | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [ocr_operation_response](#ocroperationresponse) | object | Response data for OCRText operation |

___

## Add PDF watermark
Add a PDF based watermark to a PDF file.

**Operation Id:** pdf_watermark

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Source file name | string | Optional file name (for logging purposes) | false |
| Source file content | byte | Content of the file to watermark | true |
| PDF Watermark | byte | PDF watermark content or URL | true |
| Position | enum | Watermark position on the page | true |
| Width | string | Width of the watermark (in Pts, 1/72 of an inch) | true |
| Height | string | Height of the watermark (in Pts, 1/72 of an inch) | true |
| X Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | X Coordinate of the watermark (in Pts, 1/72 of an inch) | false |
| Y Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | Y Coordinate of the watermark (in Pts, 1/72 of an inch) | false |
| Layer | enum | Watermark layer | false |
| Rotation | string | Angle of rotation | false |
| Opacity | string | Opacity in % (100 is fully visible and 1 is barely visible) | false |
| Watermark start page | int32 | Number of the first page the watermark applies to | false |
| Watermark end page | int32 | Number of the last page the watermark applies to | false |
| Watermark page interval | int32 | Which pages to display the watermark on (1&#x3D;every page, 2&#x3D;every other, etc) | false |
| Watermark page orientation | enum | Orientation of pages the watermark applies to. | false |
| Fail on error | boolean | Fail on error | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [operation_response](#operationresponse) | object | Response data for all operations |

___

## Add QR Code watermark
Add a QR Code watermark to a PDF file.

**Operation Id:** qr_code_watermark

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Source file name | string | Optional file name (for logging purposes) | false |
| Source file content | byte | Content of the file to watermark | true |
| Content | string | Data to embed in the QR Code | true |
| Version | enum | Version | true |
| Input mode | enum | Input mode | true |
| Error correction level | enum | Error correction level | true |
| Position | enum | Watermark position on the page | true |
| Width | string | Width of the watermark (in Pts, 1/72 of an inch) | true |
| Height | string | Height of the watermark (in Pts, 1/72 of an inch) | true |
| X Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | X Coordinate of the watermark (in Pts, 1/72 of an inch) | false |
| Y Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | Y Coordinate of the watermark (in Pts, 1/72 of an inch) | false |
| Layer | enum | Watermark layer | false |
| Rotation | string | Angle of rotation | false |
| Opacity | string | Opacity in % (100 is fully visible and 1 is barely visible) | false |
| Watermark background color | string | Color in #RRGGBB notation | false |
| Watermark foreground color | string | Color in #RRGGBB notation | false |
| Watermark start page | int32 | Number of the first page the watermark applies to | false |
| Watermark end page | int32 | Number of the last page the watermark applies to | false |
| Watermark page interval | int32 | Which pages to display the watermark on (1&#x3D;every page, 2&#x3D;every other, etc) | false |
| Watermark page orientation | enum | Orientation of pages the watermark applies to. | false |
| Fail on error | boolean | Fail on error | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [operation_response](#operationresponse) | object | Response data for all operations |

___

## Add rectangle watermark
Add a rectangle watermark to a PDF file.

**Operation Id:** rectangle_watermark

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Source file name | string | Optional file name (for logging purposes) | false |
| Source file content | byte | Content of the file to watermark | true |
| Position | enum | Watermark position on the page | true |
| Width | string | Width of the watermark (in Pts, 1/72 of an inch) | true |
| Height | string | Height of the watermark (in Pts, 1/72 of an inch) | true |
| X Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | X Coordinate of the watermark (in Pts, 1/72 of an inch) | false |
| Y Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | Y Coordinate of the watermark (in Pts, 1/72 of an inch) | false |
| Layer | enum | Watermark layer | false |
| Rotation | string | Angle of rotation | false |
| Opacity | string | Opacity in % (100 is fully visible and 1 is barely visible) | false |
| Watermark background color | string | Color in #RRGGBB notation | false |
| Watermark outline color | string | Color in #RRGGBB notation | false |
| Watermark outline width | string | Width of the watermark outline (in Pts, 1/72 of an inch) | false |
| Watermark start page | int32 | Number of the first page the watermark applies to | false |
| Watermark end page | int32 | Number of the last page the watermark applies to | false |
| Watermark page interval | int32 | Which pages to display the watermark on (1&#x3D;every page, 2&#x3D;every other, etc) | false |
| Watermark page orientation | enum | Orientation of pages the watermark applies to. | false |
| Fail on error | boolean | Fail on error | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [operation_response](#operationresponse) | object | Response data for all operations |

___

## Add RTF watermark
Add a rich-text watermark to a PDF file.

**Operation Id:** rtf_watermark

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Source file name | string | Optional file name (for logging purposes) | false |
| Source file content | byte | Content of the file to watermark | true |
| Watermark content | string | Watermark text in RTF format | true |
| Position | enum | Watermark position on the page | true |
| Width | string | Width of the watermark (in Pts, 1/72 of an inch) | true |
| Height | string | Height of the watermark (in Pts, 1/72 of an inch) | true |
| X Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | X Coordinate of the watermark (in Pts, 1/72 of an inch) | false |
| Y Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | Y Coordinate of the watermark (in Pts, 1/72 of an inch) | false |
| Layer | enum | Watermark layer | false |
| Rotation | string | Angle of rotation | false |
| Opacity | string | Opacity in % (100 is fully visible and 1 is barely visible) | false |
| Watermark background color | string | Color in #RRGGBB notation | false |
| Watermark outline color | string | Color in #RRGGBB notation | false |
| Watermark outline width | string | Width of the watermark outline (in Pts, 1/72 of an inch) | false |
| Watermark start page | int32 | Number of the first page the watermark applies to | false |
| Watermark end page | int32 | Number of the last page the watermark applies to | false |
| Watermark page interval | int32 | Which pages to display the watermark on (1&#x3D;every page, 2&#x3D;every other, etc) | false |
| Watermark page orientation | enum | Orientation of pages the watermark applies to. | false |
| Fail on error | boolean | Fail on error | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [operation_response](#operationresponse) | object | Response data for all operations |

___

## Secure PDF
Apply security and encryption settings.

**Operation Id:** secure_pdf

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Source file name | string | Optional file name (for logging purposes) | false |
| Source file content | byte | Content of the file to secure | true |
| Open password | password | Password required to open the PDF | false |
| Owner password | password | Password for PDF restrictions defined below | false |
| PDF restrictions | string | Print|HighResolutionPrint|ContentCopy|Annotations|FormFields|ContentAccessibility|DocumentAssembly | false |
| Fail on error | boolean | Fail on error | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [operation_response](#operationresponse) | object | Response data for all operations |

___

## Add text watermark
Add a plain-text watermark to a PDF file.

**Operation Id:** text_watermark

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Source file name | string | Optional file name (for logging purposes) | false |
| Source file content | byte | Content of the file to watermark | true |
| Watermark content | string | Watermark text | true |
| Font family name | string | Name of the font, e.g. Arial, Times New Roman, Calibri | true |
| Font size | string | Size of the font in Pt | true |
| Font color | string | Color in #RRGGBB notation | true |
| Text alignment | enum | Text alignment | true |
| Word wrap | enum | Spcifies if wordwrap text | true |
| Position | enum | Watermark position on the page | true |
| Width | string | Width of the watermark (in Pts, 1/72 of an inch) | true |
| Height | string | Height of the watermark (in Pts, 1/72 of an inch) | true |
| X Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | X Coordinate of the watermark (in Pts, 1/72 of an inch) | false |
| Y Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | Y Coordinate of the watermark (in Pts, 1/72 of an inch) | false |
| Layer | enum | Watermark layer | false |
| Rotation | string | Angle of rotation | false |
| Opacity | string | Opacity in % (100 is fully visible and 1 is barely visible) | false |
| Font style | string | One or more styles, e.g. bold|italic|underline|strikeout | false |
| Font outline color | string | Color in #RRGGBB notation | false |
| Font outline width | string | Width of the font outline (in Pts, 1/72 of an inch) | false |
| Watermark start page | int32 | Number of the first page the watermark applies to | false |
| Watermark end page | int32 | Number of the last page the watermark applies to | false |
| Watermark page interval | int32 | Which pages to display the watermark on (1&#x3D;every page, 2&#x3D;every other, etc) | false |
| Watermark page orientation | enum | Orientation of pages the watermark applies to. | false |
| Fail on error | boolean | Fail on error | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [operation_response](#operationresponse) | object | Response data for all operations |

___


## Objects

### composite_watermark_data
Parameters for CompositeWatermark operation

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Source file name | string | Optional file name (for logging purposes) | source_file_name |
| Source file content | byte | Content of the file to watermark | source_file_content |
| [sharepoint_file](#sharepointfile) | object | SharePoint file information for operation | sharepoint_file |
| Watermark data | string | Watermark data in Muhimbi XML format | watermark_data |
| Fail on error | boolean | Fail on error | fail_on_error |

### convert_data
Parameters for Convert operation

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Source file name | string | Name of the source file including extension | source_file_name |
| Source file content | byte | Content of the file to convert | source_file_content |
| [sharepoint_file](#sharepointfile) | object | SharePoint file information for operation | sharepoint_file |
| Output format | enum | Output format | output_format |
| Override settings | string | Optional settings using Muhimbi&#x27;s XML syntax | override_settings |
| Template file content | byte | Optional template file content (e.g. infopath XSN file) | template_file_content |
| Fail on error | boolean | Fail on error | fail_on_error |

### convert_html_data
Parameters for ConvertHtml operation

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Source URL or HTML | string | HTML fragment or URL to convert | source_url_or_html |
| Page orientation | enum | Page orientation | page_orientation |
| User name | string | User name | username |
| Password | password | Password | password |
| Authentication type | enum | Authentication type | authentication_type |
| Fail on error | boolean | Fail on error | fail_on_error |

### copy_metadata_data
Parameters for CopyMetadata operation

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Site url | string | SharePoint site url (example: http://contoso.sharepoint.com/sites/mysite) | site_url |
| Source file url | string | Path to the source file | source_file_url |
| Destination file path | string | Path to the destination file | destination_file_url |
| User name | string | User name to log in to the SharePoint site | username |
| Password | string | Password to log in to the SharePoint site | password |
| Fields to copy | string | Optional comma separated list of fields | copy_fields |
| Destination content type | string | Optional content type for the destination file | content_type |
| Fail on error | boolean | Fail on error | fail_on_error |

### ellipse_watermark_data
Parameters for EllipseWatermark operation

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Source file name | string | Optional file name (for logging purposes) | source_file_name |
| Source file content | byte | Content of the file to watermark | source_file_content |
| Position | enum | Watermark position on the page | position |
| [sharepoint_file](#sharepointfile) | object | SharePoint file information for operation | sharepoint_file |
| Width | string | Width of the watermark (in Pts, 1/72 of an inch) | width |
| Height | string | Height of the watermark (in Pts, 1/72 of an inch) | height |
| X Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | X Coordinate of the watermark (in Pts, 1/72 of an inch) | x |
| Y Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | Y Coordinate of the watermark (in Pts, 1/72 of an inch) | y |
| Layer | enum | Watermark layer | layer |
| Rotation | string | Angle of rotation | rotation |
| Opacity | string | Opacity in % (100 is fully visible and 1 is barely visible) | opacity |
| Fill color | string | Color in #RRGGBB notation | fill_color |
| Line color | string | Color in #RRGGBB notation | line_color |
| Line width | string | Width of the line (in Pts, 1/72 of an inch) | line_width |
| Watermark start page | int32 | Number of the first page the watermark applies to | start_page |
| Watermark end page | int32 | Number of the last page the watermark applies to | end_page |
| Watermark page interval | int32 | Which pages to display the watermark on (1&#x3D;every page, 2&#x3D;every other, etc) | page_interval |
| Watermark page orientation | enum | Orientation of pages the watermark applies to. | page_orientation |
| Fail on error | boolean | Fail on error | fail_on_error |

### image_watermark_data
Parameters for ImageWatermark operation

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Source file name | string | Optional file name (for logging purposes) | source_file_name |
| Source file content | byte | Content of the file to watermark | source_file_content |
| Image | byte | Image content or URL | image_file |
| [sharepoint_file](#sharepointfile) | object | SharePoint file information for operation | sharepoint_file |
| Position | enum | Watermark position on the page | position |
| Width | string | Width of the watermark (in Pts, 1/72 of an inch) | width |
| Height | string | Height of the watermark (in Pts, 1/72 of an inch) | height |
| X Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | X Coordinate of the watermark (in Pts, 1/72 of an inch) | x |
| Y Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | Y Coordinate of the watermark (in Pts, 1/72 of an inch) | y |
| Layer | enum | Watermark layer | layer |
| Rotation | string | Angle of rotation | rotation |
| Opacity | string | Opacity in % (100 is fully visible and 1 is barely visible) | opacity |
| Watermark background color | string | Color in #RRGGBB notation | fill_color |
| Watermark outline color | string | Color in #RRGGBB notation | line_color |
| Watermark outline width | string | Width of the watermark outline (in Pts, 1/72 of an inch) | line_width |
| Watermark start page | int32 | Number of the first page the watermark applies to | start_page |
| Watermark end page | int32 | Number of the last page the watermark applies to | end_page |
| Watermark page interval | int32 | Which pages to display the watermark on (1&#x3D;every page, 2&#x3D;every other, etc) | page_interval |
| Watermark page orientation | enum | Orientation of pages the watermark applies to. | page_orientation |
| Fail on error | boolean | Fail on error | fail_on_error |

### line_watermark_data
Parameters for LineWatermark operation

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Source file name | string | Optional file name (for logging purposes) | source_file_name |
| Source file content | byte | Content of the file to watermark | source_file_content |
| Position | enum | Watermark position on the page | position |
| [sharepoint_file](#sharepointfile) | object | SharePoint file information for operation | sharepoint_file |
| X Coordinate (start) | string | Start X Coordinate of the line (in Pts, 1/72 of an inch) | x |
| Y Coordinate (start) | string | Start Y Coordinate of the line (in Pts, 1/72 of an inch) | y |
| X Coordinate (end) | string | End X Coordinate of the line (in Pts, 1/72 of an inch) | end_x |
| Y Coordinate (end) | string | End Y Coordinate of the line (in Pts, 1/72 of an inch) | end_y |
| Layer | enum | Watermark layer | layer |
| Rotation | string | Angle of rotation | rotation |
| Opacity | string | Opacity in % (100 is fully visible and 1 is barely visible) | opacity |
| Line color | string | Color in #RRGGBB notation | line_color |
| Line width | string | Width of the line (in Pts, 1/72 of an inch) | line_width |
| Watermark start page | int32 | Number of the first page the watermark applies to | start_page |
| Watermark end page | int32 | Number of the last page the watermark applies to | end_page |
| Watermark page interval | int32 | Which pages to display the watermark on (1&#x3D;every page, 2&#x3D;every other, etc) | page_interval |
| Watermark page orientation | enum | Orientation of pages the watermark applies to. | page_orientation |
| Fail on error | boolean | Fail on error | fail_on_error |

### merge_to_pdf_data
Parameters for MergeToPdf operation

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Source file name - 1 | string | Name of the source file including extension | source_file_name_1 |
| Source file content - 1 | byte | Content of the file to merge | source_file_content_1 |
| Source file name - 2 | string | Name of the source file including extension | source_file_name_2 |
| Source file content - 2 | byte | Content of the file to merge | source_file_content_2 |
| Source file name - 3 | string | Name of the source file including extension | source_file_name_3 |
| Source file content - 3 | byte | Content of the file to merge | source_file_content_3 |
| Source file name - 4 | string | Name of the source file including extension | source_file_name_4 |
| Source file content - 4 | byte | Content of the file to merge | source_file_content_4 |
| Source file name - 5 | string | Name of the source file including extension | source_file_name_5 |
| Source file content - 5 | byte | Content of the file to merge | source_file_content_5 |
| [sharepoint_file](#sharepointfile) | object | SharePoint file information for operation | sharepoint_file |
| Each document | enum | Document start page | document_start_page |
| Fail on error | boolean | Fail on error | fail_on_error |

### ocr_operation_response
Response data for OCRText operation

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Out text | string | Extracted OCRed text in plain text. | out_text |
| Base file name | string | Name of the input file without the extension. | base_file_name |
| Result code | enum | Operation result code. | result_code |
| Result details | string | Operation result details. | result_details |

### ocr_pdf_data
Parameters for OCRText operation

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Source file name | string | Name of the source file including extension | source_file_name |
| Source file content | byte | Content of the file to OCR | source_file_content |
| [sharepoint_file](#sharepointfile) | object | SharePoint file information for operation | sharepoint_file |
| Language | enum | Language | language |
| Performance | enum | Performance | performance |
| Blacklist / whitelist | enum | Characters option | characters_option |
| Characters | string | Characters to blacklist or whitelist | characters |
| Use pagination | boolean | Paginate | paginate |
| Regions | string | Limit the area to OCR to one or more specific areas | regions |
| Fail on error | boolean | Fail on error | fail_on_error |

### ocr_text_data
Parameters for OCRText operation

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Source file name | string | Name of the source file including extension | source_file_name |
| Source file content | byte | Content of the file to OCR | source_file_content |
| [sharepoint_file](#sharepointfile) | object | SharePoint file information for operation | sharepoint_file |
| Language | enum | Languate | language |
| X Coordinate | string | X Coordinate (in Pts, 1/72 of an inch) | x |
| Y Coordinate | string | Y Coordinate (in Pts, 1/72 of an inch) | y |
| Width | string | Width of the OCR area (in Pts, 1/72 of an inch) | width |
| Height | string | Height of the OCR area (in Pts, 1/72 of an inch) | height |
| Page number | string | Page number (leave blank to OCR all pages) | page_number |
| Performance | enum | Performance () | performance |
| Blacklist / whitelist | enum | Characters option | characters_option |
| Characters | string | Characters to blacklist or whitelist | characters |
| Use pagination | boolean | Paginate | paginate |
| Fail on error | boolean | Fail on error | fail_on_error |

### operation_response
Response data for all operations

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Processed file content | byte | File generated by the Muhimbi converter. | processed_file_content |
| Base file name | string | Name of the input file without the extension. | base_file_name |
| Result code | enum | Operation result code. | result_code |
| Result details | string | Operation result details. | result_details |

### operation_response_common
Response data for all operations

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Base file name | string | Name of the input file without the extension. | base_file_name |
| Result code | enum | Operation result code. | result_code |
| Result details | string | Operation result details. | result_details |

### pdf_watermark_data
Parameters for PDFWatermark operation

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Source file name | string | Optional file name (for logging purposes) | source_file_name |
| Source file content | byte | Content of the file to watermark | source_file_content |
| PDF Watermark | byte | PDF watermark content or URL | pdf_file |
| [sharepoint_file](#sharepointfile) | object | SharePoint file information for operation | sharepoint_file |
| Position | enum | Watermark position on the page | position |
| Width | string | Width of the watermark (in Pts, 1/72 of an inch) | width |
| Height | string | Height of the watermark (in Pts, 1/72 of an inch) | height |
| X Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | X Coordinate of the watermark (in Pts, 1/72 of an inch) | x |
| Y Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | Y Coordinate of the watermark (in Pts, 1/72 of an inch) | y |
| Layer | enum | Watermark layer | layer |
| Rotation | string | Angle of rotation | rotation |
| Opacity | string | Opacity in % (100 is fully visible and 1 is barely visible) | opacity |
| Watermark start page | int32 | Number of the first page the watermark applies to | start_page |
| Watermark end page | int32 | Number of the last page the watermark applies to | end_page |
| Watermark page interval | int32 | Which pages to display the watermark on (1&#x3D;every page, 2&#x3D;every other, etc) | page_interval |
| Watermark page orientation | enum | Orientation of pages the watermark applies to. | page_orientation |
| Fail on error | boolean | Fail on error | fail_on_error |

### qr_code_watermark_data
Parameters for QRCodeWatermark operation

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Source file name | string | Optional file name (for logging purposes) | source_file_name |
| Source file content | byte | Content of the file to watermark | source_file_content |
| Content | string | Data to embed in the QR Code | content |
| [sharepoint_file](#sharepointfile) | object | SharePoint file information for operation | sharepoint_file |
| Version | enum | Version | version |
| Input mode | enum | Input mode | input_mode |
| Error correction level | enum | Error correction level | error_correction_level |
| Position | enum | Watermark position on the page | position |
| Width | string | Width of the watermark (in Pts, 1/72 of an inch) | width |
| Height | string | Height of the watermark (in Pts, 1/72 of an inch) | height |
| X Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | X Coordinate of the watermark (in Pts, 1/72 of an inch) | x |
| Y Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | Y Coordinate of the watermark (in Pts, 1/72 of an inch) | y |
| Layer | enum | Watermark layer | layer |
| Rotation | string | Angle of rotation | rotation |
| Opacity | string | Opacity in % (100 is fully visible and 1 is barely visible) | opacity |
| Watermark background color | string | Color in #RRGGBB notation | fill_color |
| Watermark foreground color | string | Color in #RRGGBB notation | line_color |
| Watermark start page | int32 | Number of the first page the watermark applies to | start_page |
| Watermark end page | int32 | Number of the last page the watermark applies to | end_page |
| Watermark page interval | int32 | Which pages to display the watermark on (1&#x3D;every page, 2&#x3D;every other, etc) | page_interval |
| Watermark page orientation | enum | Orientation of pages the watermark applies to. | page_orientation |
| Fail on error | boolean | Fail on error | fail_on_error |

### rectangle_watermark_data
Parameters for RectangleWatermark operation

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Source file name | string | Optional file name (for logging purposes) | source_file_name |
| Source file content | byte | Content of the file to watermark | source_file_content |
| Position | enum | Watermark position on the page | position |
| [sharepoint_file](#sharepointfile) | object | SharePoint file information for operation | sharepoint_file |
| Width | string | Width of the watermark (in Pts, 1/72 of an inch) | width |
| Height | string | Height of the watermark (in Pts, 1/72 of an inch) | height |
| X Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | X Coordinate of the watermark (in Pts, 1/72 of an inch) | x |
| Y Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | Y Coordinate of the watermark (in Pts, 1/72 of an inch) | y |
| Layer | enum | Watermark layer | layer |
| Rotation | string | Angle of rotation | rotation |
| Opacity | string | Opacity in % (100 is fully visible and 1 is barely visible) | opacity |
| Watermark background color | string | Color in #RRGGBB notation | fill_color |
| Watermark outline color | string | Color in #RRGGBB notation | line_color |
| Watermark outline width | string | Width of the watermark outline (in Pts, 1/72 of an inch) | line_width |
| Watermark start page | int32 | Number of the first page the watermark applies to | start_page |
| Watermark end page | int32 | Number of the last page the watermark applies to | end_page |
| Watermark page interval | int32 | Which pages to display the watermark on (1&#x3D;every page, 2&#x3D;every other, etc) | page_interval |
| Watermark page orientation | enum | Orientation of pages the watermark applies to. | page_orientation |
| Fail on error | boolean | Fail on error | fail_on_error |

### rtf_watermark_data
Parameters for RTFWatermark operation

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Source file name | string | Optional file name (for logging purposes) | source_file_name |
| Source file content | byte | Content of the file to watermark | source_file_content |
| Watermark content | string | Watermark text in RTF format | rtf_data |
| [sharepoint_file](#sharepointfile) | object | SharePoint file information for operation | sharepoint_file |
| Position | enum | Watermark position on the page | position |
| Width | string | Width of the watermark (in Pts, 1/72 of an inch) | width |
| Height | string | Height of the watermark (in Pts, 1/72 of an inch) | height |
| X Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | X Coordinate of the watermark (in Pts, 1/72 of an inch) | x |
| Y Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | Y Coordinate of the watermark (in Pts, 1/72 of an inch) | y |
| Layer | enum | Watermark layer | layer |
| Rotation | string | Angle of rotation | rotation |
| Opacity | string | Opacity in % (100 is fully visible and 1 is barely visible) | opacity |
| Watermark background color | string | Color in #RRGGBB notation | fill_color |
| Watermark outline color | string | Color in #RRGGBB notation | line_color |
| Watermark outline width | string | Width of the watermark outline (in Pts, 1/72 of an inch) | line_width |
| Watermark start page | int32 | Number of the first page the watermark applies to | start_page |
| Watermark end page | int32 | Number of the last page the watermark applies to | end_page |
| Watermark page interval | int32 | Which pages to display the watermark on (1&#x3D;every page, 2&#x3D;every other, etc) | page_interval |
| Watermark page orientation | enum | Orientation of pages the watermark applies to. | page_orientation |
| Fail on error | boolean | Fail on error | fail_on_error |

### secure_pdf_data
Parameters for SecurePdf operation

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Source file name | string | Optional file name (for logging purposes) | source_file_name |
| Source file content | byte | Content of the file to secure | source_file_content |
| [sharepoint_file](#sharepointfile) | object | SharePoint file information for operation | sharepoint_file |
| Open password | password | Password required to open the PDF | open_password |
| Owner password | password | Password for PDF restrictions defined below | owner_password |
| PDF restrictions | string | Print|HighResolutionPrint|ContentCopy|Annotations|FormFields|ContentAccessibility|DocumentAssembly | security_options |
| Fail on error | boolean | Fail on error | fail_on_error |

### split_operation_response
Response data for split operation

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Processed file content | array of byte | Files generated by the Muhimbi converter. | processed_file_contents |
| Base file name | string | Name of the input file without the extension. | base_file_name |
| Result code | enum | Operation result code. | result_code |
| Result details | string | Operation result details. | result_details |

### split_pdf_data
Parameters for SplitPdf operation

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Source file name | string | Name of the source file including extension | source_file_name |
| Source file content | byte | Content of the file to convert | source_file_content |
| [sharepoint_file](#sharepointfile) | object | SharePoint file information for operation | sharepoint_file |
| File name template | string | File name template for splited files (For SharePoint only) | file_name_template |
| File split type | enum | Split by option | file_split_type |
| Split parameter | int32 | Split parameters | split_parameter |
| Fail on error | boolean | Fail on error | fail_on_error |

### text_watermark_data
Parameters for TextWatermark operation

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Source file name | string | Optional file name (for logging purposes) | source_file_name |
| Source file content | byte | Content of the file to watermark | source_file_content |
| Watermark content | string | Watermark text | content |
| [sharepoint_file](#sharepointfile) | object | SharePoint file information for operation | sharepoint_file |
| Font family name | string | Name of the font, e.g. Arial, Times New Roman, Calibri | font_family_name |
| Font size | string | Size of the font in Pt | font_size |
| Font color | string | Color in #RRGGBB notation | fill_color |
| Text alignment | enum | Text alignment | alignment |
| Word wrap | enum | Spcifies if wordwrap text | word_wrap |
| Position | enum | Watermark position on the page | position |
| Width | string | Width of the watermark (in Pts, 1/72 of an inch) | width |
| Height | string | Height of the watermark (in Pts, 1/72 of an inch) | height |
| X Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | X Coordinate of the watermark (in Pts, 1/72 of an inch) | x |
| Y Coordinate (When &#x27;Position&#x27; is set to &#x27;Absolute&#x27;) | string | Y Coordinate of the watermark (in Pts, 1/72 of an inch) | y |
| Layer | enum | Watermark layer | layer |
| Rotation | string | Angle of rotation | rotation |
| Opacity | string | Opacity in % (100 is fully visible and 1 is barely visible) | opacity |
| Font style | string | One or more styles, e.g. bold|italic|underline|strikeout | font_style |
| Font outline color | string | Color in #RRGGBB notation | line_color |
| Font outline width | string | Width of the font outline (in Pts, 1/72 of an inch) | line_width |
| Watermark start page | int32 | Number of the first page the watermark applies to | start_page |
| Watermark end page | int32 | Number of the last page the watermark applies to | end_page |
| Watermark page interval | int32 | Which pages to display the watermark on (1&#x3D;every page, 2&#x3D;every other, etc) | page_interval |
| Watermark page orientation | enum | Orientation of pages the watermark applies to. | page_orientation |
| Fail on error | boolean | Fail on error | fail_on_error |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |


