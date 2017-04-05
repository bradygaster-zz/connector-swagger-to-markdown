<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Face API (Preview)

Microsoft Cognitive Services Face API allows you to detect, identify, analyze, organize and tag faces in photos.

## Creating a connection

To connect your account, you will need the following information:

| Parameter Name | Description | Type |
|----------------|-------------|------|
| API Key | API Key | securestring |


# Actions

## Get a face list
Retrieve a face list&#x27;s information, including faceListId, name, userData and faces in the face list.

**Operation Id:** GetFaceList

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Face List Id | string | faceListId of the target face list. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [GetFaceListResponse](#getfacelistresponse) | object |  |

___

## Create a face list
Create an empty face list with user-specified faceListId, name and an optional userData.

**Operation Id:** CreateFaceList

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Face List Id | string | Valid character is letter in lower case or digit or &#x27;-&#x27; or &#x27;_&#x27;, maximum length is 64 | true |
| Face List Name | string | Name of the created face list, maximum length is 128. | true |
| User Data | string | Optional user defined data for the face list. Length should not exceed 16KB. | false |

#### Returns
This operation does not return anything.

___

## Detect faces
Detect human faces in an image and returns face locations, and optionally with faceIds, landmarks, and attributes.

**Operation Id:** Detect

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Image Url | string | Image must be JPEG, PNG, GIF(the first frame), or BMP | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [DetectResponse](#detectresponse) | array |  |

___

## Add a person face
Add a representative face to a person for identification.

**Operation Id:** AddPersonFace

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Person Group Id | string | Person group | true |
| Person Id | string | Target person that the face is added to. | true |
| Image Url | string | Image must be JPEG, PNG, GIF(the first frame), or BMP | true |
| Target Face | string | A face rectangle to specify the target face to be added to a person, in the format of targetFace&#x3D;left,top,width,height | false |
| User Data | string | User-specified data about the target face to add for any purpose. The maximum length is 1KB. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [AddPersonFaceResponse](#addpersonfaceresponse) | object |  |

___

## Add face to face list
Add face to face list.

**Operation Id:** AddFaceToFaceList

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Image Url | string | Image must be JPEG, PNG, GIF(the first frame), or BMP | false |
| Target Face | string | A face rectangle to specify the target face to be added to a person, in the format of targetFace&#x3D;left,top,width,height | false |
| User Data | string | User-specified data about the target face to add for any purpose. The maximum length is 1KB. | false |
| Face List Id | string | Valid character is letter in lower case or digit or &#x27;-&#x27; or &#x27;_&#x27;, maximum length is 64. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [AddPersonFaceResponse](#addpersonfaceresponse) | object |  |

___

## Get a person group
Retrieve the information of a person group, including its name and userData.

**Operation Id:** GetPersonGroup

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Person Group Id | string | Target Person Group Id. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [GetPersonGroupResponse](#getpersongroupresponse) | object |  |

___

## Create a person group
Create a new person group with specified personGroupId, name and user-provided userData. 

**Operation Id:** CreatePersonGroup

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Person Group Id | string | New Person Group Id (valid characters include numbers, English letters in lower case, &#x27;-&#x27; and &#x27;_&#x27;) | true |
| Name | string | Person group display name. The maximum length is 128. | true |
| User Data | string | User-provided data attached to the person group. The size limit is 16KB. | false |

#### Returns
This operation does not return anything.

___

## Find person from face
Verify whether two faces belong to a same person or whether one face belongs to a person.

**Operation Id:** Verify

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Face Id | string | Unique faceId of the detected face. Will expire 24 hours after detection call. | true |
| Person Group Id | string | Person Group Id created in Face API - Create Person Group action. | true |
| Person Id | string | Person Id created in Face API - Create Person action. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [VerifyResponse](#verifyresponse) | object |  |

___

## Get a person face
Retrieve information about a persisted face specified by persistedFaceId, personId and its belonging personGroupId.

**Operation Id:** GetPersonFace

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Person Group Id | string | Specifying the person group containing the target person. | true |
| Person Id | string | Specifying the target person that the face belongs to. | true |
| Persisted Face Id | string | The persistedFaceId of the target persisted face of the person. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [GetPersonFaceResponse](#getpersonfaceresponse) | object |  |

___

## Create a person
Create a new person in a specified person group.

**Operation Id:** CreatePerson

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Person Group Id | string | Specifying the target person group to create the person. | true |
| Name | string | Display name of the target person. The maximum length is 128. | true |
| User Data | string | Optional fields for user-provided data attached to a person. Size limit is 16KB. | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [CreatePersonResponse](#createpersonresponse) | object |  |

___

## Get a person
Retrieve a person&#x27;s information, including registered persisted faces, name and userData.

**Operation Id:** GetPerson

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Person Group Id | string | Specifying the person group containing the target person. | true |
| Person Id | string | Specifying the target person. | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [GetPersonResponse](#getpersonresponse) | object |  |

___


## Objects

### GetPersonsInternalResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| personId | string |  | personId |
| persistedFaceIds | array of string |  | persistedFaceIds |
|  | string |  | persistedFaceIds |
| name | string |  | name |
| userData | string |  | userData |

### GetPersonGroupsInternalResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| personGroupId | string |  | personGroupId |
| name | string |  | name |
| userData | string |  | userData |

### GetFaceListInternalResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| faceListId | string |  | faceListId |
| name | string |  | name |
| userData | string |  | userData |

### DetectResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Face Id | string | Unique faceId of the detected face. Will expire 24 hours after detection call. | faceId |
| Top | int32 | Parameters of a rectangle area for the face location on image. | faceRectangle.top |
| Left | int32 | Parameters of a rectangle area for the face location on image. | faceRectangle.left |
| Width | int32 | Parameters of a rectangle area for the face location on image. | faceRectangle.width |
| Height | int32 | Parameters of a rectangle area for the face location on image. | faceRectangle.height |
| Left Pupil X | float | The x-coordinate of the left pupil. | faceLandmarks.pupilLeft.x |
| Left Pupil Y | float | The y-coordinate of the left pupil. | faceLandmarks.pupilLeft.y |
| Right Pupil X | float | The x-coordinate of the right pupil. | faceLandmarks.pupilRight.x |
| Right Pupil Y | float | The y-coordinate of the right pupil. | faceLandmarks.pupilRight.y |
| Nose Tip X | float | The x-coordinate of the nose tip. | faceLandmarks.noseTip.x |
| Nose Tip Y | float | The y-coordinate of the nose tip. | faceLandmarks.noseTip.y |
| Mouth Left X | float | The x-coordinate for the left side of the mouth. | faceLandmarks.mouthLeft.x |
| Mouth Left Y | float | The y-coordinate for the left side of the mouth. | faceLandmarks.mouthLeft.y |
| Mouth Right X | float | The x-coordinate for the right side of the mouth. | faceLandmarks.mouthRight.x |
| Mouth Right Y | float | The y-coordinate for the right side of the mouth. | faceLandmarks.mouthRight.y |
| Outer Left Eyebrow X | float | The x-coordinate for the outer side of the left eyebrow. | faceLandmarks.eyebrowLeftOuter.x |
| Outer Left Eyebrow Y | float | The y-coordinate for the outer side of the left eyebrow. | faceLandmarks.eyebrowLeftOuter.y |
| Inner Left Eybrow X | float | The x-coordinate for the inner side of the left eyebrow. | faceLandmarks.eyebrowLeftInner.x |
| Inner Left Eyebrow Y | float | The y-coordinate for the inner side of the left eyebrow. | faceLandmarks.eyebrowLeftInner.y |
| Outer Left Eye X | float | The x-coordinate for the outer side of the left eye. | faceLandmarks.eyeLeftOuter.x |
| Outer Left Eye Y | float | The y-coordinate for the outer side of the left eye. | faceLandmarks.eyeLeftOuter.y |
| Top of Left Eye X | float | The x-coordinate for the top of the left eye. | faceLandmarks.eyeLeftTop.x |
| Top of Left Eye Y | float | The y-coordinate for the top of the left eye. | faceLandmarks.eyeLeftTop.y |
| Bottom of Left Eye X | float | The x-coordinate for the bottom of the left eye. | faceLandmarks.eyeLeftBottom.x |
| Bottom of Left Eye Y | float | The y-coordinate for the bottom of the left eye. | faceLandmarks.eyeLeftBottom.y |
| Inner Left Eye X | float | The x-coordinate for the inner side of the left eye. | faceLandmarks.eyeLeftInner.x |
| Inner Left Eye Y | float | The y-coordinate for the inner side of the left eye. | faceLandmarks.eyeLeftInner.y |
| Inner Right Eybrow X | float | The x-coordinate for the inner side of the right eyebrow. | faceLandmarks.eyebrowRightInner.x |
| Inner Right Eyebrow Y | float | The y-coordinate for the inner side of the right eyebrow. | faceLandmarks.eyebrowRightInner.y |
| Outer Right Eyebrow X | float | The x-coordinate for the outer side of the right eyebrow. | faceLandmarks.eyebrowRightOuter.x |
| Outer Right Eyebrow Y | float | The y-coordinate for the outer side of the right eyebrow. | faceLandmarks.eyebrowRightOuter.y |
| Inner Right Eye X | float | The x-coordinate for the inner side of the right eye. | faceLandmarks.eyeRightInner.x |
| Inner Right Eye Y | float | The y-coordinate for the inner side of the right eye. | faceLandmarks.eyeRightInner.y |
| Top of Right Eye X | float | The x-coordinate for the top of the right eye. | faceLandmarks.eyeRightTop.x |
| Top of Right Eye Y | float | The y-coordinate for the top of the right eye. | faceLandmarks.eyeRightTop.y |
| Bottom of Right Eye X | float | The x-coordinate for the bottom of the right eye. | faceLandmarks.eyeRightBottom.x |
| Bottom of Right Eye Y | float | The y-coordinate for the bottom of the right eye. | faceLandmarks.eyeRightBottom.y |
| Outer Right Eye X | float | The x-coordinate for the outer side of the right eye. | faceLandmarks.eyeRightOuter.x |
| Outer Right Eye Y | float | The y-coordinate for the outer side of the right eye. | faceLandmarks.eyeRightOuter.y |
| Left Nose Root X | float | The x-coordinate for left side of the nose root. | faceLandmarks.noseRootLeft.x |
| Left Nose Root Y | float | The y-coordinate for left side of the nose root. | faceLandmarks.noseRootLeft.y |
| Right Nose Root X | float | The x-coordinate for right side of the nose root. | faceLandmarks.noseRootRight.x |
| Right Nose Root Y | float | The y-coordinate for right side of the nose root. | faceLandmarks.noseRootRight.y |
| Top of Left Nose Altar X | float | The x-coordinate for top of the left nose altar. | faceLandmarks.noseLeftAlarTop.x |
| Top of Left Nose Altar Y | float | The y-coordinate for top of the left nose altar. | faceLandmarks.noseLeftAlarTop.y |
| Top of Right Nose Altar X | float | The x-coordinate for top of the right nose altar. | faceLandmarks.noseRightAlarTop.x |
| Top of Right Nose Altar Y | float | The y-coordinate for top of the right nose altar. | faceLandmarks.noseRightAlarTop.y |
| Tip of Left Nose Altar Out X | float | The x-coordinate for tip of the left nose altar. | faceLandmarks.noseLeftAlarOutTip.x |
| Tip of Left Nose Altar Out Y | float | The y-coordinate for tip of the left nose altar/ | faceLandmarks.noseLeftAlarOutTip.y |
| Tip of Right Nose Altar Out X | float | The x-coordinate for tip of the right nose altar. | faceLandmarks.noseRightAlarOutTip.x |
| Tip of Right Nose Altar Out Y | float | The y-coordinate for tip of the right nose altar. | faceLandmarks.noseRightAlarOutTip.y |
| Top of Upper Lip X | float | The x-coordinate for top of upper lip. | faceLandmarks.upperLipTop.x |
| Top of Upper Lip Y | float | The y-coordinate for top of upper lip. | faceLandmarks.upperLipTop.y |
| Bottom of Upper Lip X | float | The x-coordinate for bottom of upper lip. | faceLandmarks.upperLipBottom.x |
| Bottom of Upper Lip Y | float | The y-coordinate for bottom of upper lip. | faceLandmarks.upperLipBottom.y |
| Top of Under Lip X | float | The x-coordinate for top of under lip. | faceLandmarks.underLipTop.x |
| Top of Under Lip Y | float | The y-coordinate for top of under lip. | faceLandmarks.underLipTop.y |
| Bottom of Under Lip X | float | The x-coordinate for bottom of under lip. | faceLandmarks.underLipBottom.x |
| Bottom of Under Lip Y | float | The y-coordinate for bottom of under lip. | faceLandmarks.underLipBottom.y |
| Smile | float | Intensity between [0,1]. | faceAttributes.smile |
| Head Pose Pitch | float | Reserved field, always returns 0. | faceAttributes.headPose.pitch |
| Head Pose Roll | float | Roll of the head pose. | faceAttributes.headPose.roll |
| Head Pose Yaw | float | Yaw of the head pose. | faceAttributes.headPose.yaw |
| Gender | string | Male for female. | faceAttributes.gender |
| Age | float | Age of person. | faceAttributes.age |
| Moustache | float | Intensity between [0,1]. | faceAttributes.facialHair.moustache |
| Beard | float | Intensity between [0,1]. | faceAttributes.facialHair.beard |
| Sideburns | float | Intensity between [0,1]. | faceAttributes.facialHair.sideburns |
| Glasses | string | Type of glasses. | faceAttributes.glasses |

### AddPersonFaceResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Persisted Face Id | string |  | persistedFaceId |

### GetPersonGroupResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Person Group Id | string |  | personGroupId |
| Name | string |  | name |
| userData | string |  | userData |

### GetFaceListResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Persisted Faces | array of object |  | persistedFaces |
| Persisted Face Id | string | Id of the face. | persistedFaces.persistedFaceId |
| User Data | string | User-provided data attached to each face. | persistedFaces.userData |
| Face List Id | string | faceListId of the target face list. | faceListId |
| Name | string | Face list&#x27;s display name. | name |
| User Data | string | User-provided data attached to the face list. | userData |

### GetPersonFaceResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Persisted Face Id | string |  | persistedFaceId |
| userData | string |  | userData |

### CreatePersonResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Person Id | string |  | personId |

### GetPersonResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Person Id | string |  | personId |
| Persisted Face Ids | array of string |  | persistedFaceIds |
|  | string |  | persistedFaceIds |
| Name | string |  | name |
| User Data | string |  | userData |

### VerifyResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Is Identical | boolean | True if the two faces belong to the same person or the face belongs to the person, otherwise false. | isIdentical |
| Confidence | float | A number indicates the similarity confidence of whether two faces belong to the same person, or whether the face belongs to the person.  | confidence |

### IdentifyResponse


| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Face Id | string | faceId of the query face. | faceId |
| Candidates | array of object |  | candidates |
| Person Id | string | personId of candidate person. | candidates.personId |
| Confidence | float | A float number between 0.0 and 1.0. | candidates.confidence |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 100 | 60 seconds |


