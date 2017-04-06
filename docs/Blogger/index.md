<img src="icon.png" alt="Icon" data-linktype="relative-path" height="100" width="100">

# Blogger (Preview)

Blogger is a blog publishing service. It allows you to create websites and post to them on an ongoing basis.


# Actions

## List user blogs
Lists all blogs for the current user

**Operation Id:** ListBlogs

#### Parameters
This operation does not require any input.

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [BlogList](#bloglist) | object | A list of Blogger blogs |

___

## List all posts
List all posts

**Operation Id:** ListPosts

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Blog Id | string | Blog | true |
| Status | string | Status of the posts to retrieve (live or draft) | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [PostList](#postlist) | object | A list of Blogger posts |

___

## Create post
Create post

**Operation Id:** CreatePost

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Blog Id | string | Blog | true |
| Title | string | The title of the post | true |
| Content | string | The content of the post | true |
| Labels | string |  | false |
| Draft | boolean | Indicate if this post should be saved as a draft | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Post](#post) | object | A Blogger post object |

___

## Get a post
Get a post

**Operation Id:** GetPost

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Blog Id | string | Blog | true |
| Post Id | string | Post | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Post](#post) | object | A Blogger post object |

___

## Edit a post
Edit a post

**Operation Id:** EditPost

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Blog Id | string | Blog | true |
| Post Id | string | Post | true |
| Title | string | The title of the post | false |
| Content | string | The content of the post | false |
| Labels | string |  | false |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Post](#post) | object | A Blogger post object |

___

## Delete a post
Delete a post

**Operation Id:** DeletePost

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Blog Id | string | Blog | true |
| Post Id | string | Post | true |

#### Returns
This operation does not return anything.

___

## Publish a post
Publish a post

**Operation Id:** PublishPost

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Blog Id | string | Blog | true |
| Post Id | string | Post | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Post](#post) | object | A Blogger post object |

___

## Revert a post
Revert a post

**Operation Id:** RevertPost

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Blog Id | string | Blog | true |
| Post Id | string | Post | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Post](#post) | object | A Blogger post object |

___

# Triggers

## When a post is created
Triggers a flow when a new post is created

**Operation Id:** OnPostCreated

#### Parameters
| Summary | Type | Description | Required |
|---------|------|-------------|----------|
| Blog Id | string | Select a blog to watch | true |
| Post Status | string | Status of the posts to retrieve | true |

#### Returns
| Summary | Type | Description |
|---------|------|-------------|
| [Post](#post) | object | A Blogger post object |

___


## Objects

### PostList
A list of Blogger posts

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Posts | Array of [Post](#post) | The list of blog post items | items |

### Post
A Blogger post object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Post Id | string | The id of the post | id |
| Blog Id | string | The associated blog id of the post | blog.id |
| Published Date | date-time | The published date of the post | published |
| Updated Date | date-time | The updated date of the post | updated |
| Post URL | string | The url where this post is displayed | url |
| Title | string | The title of the post | title |
| Post content | string | The content of the post | content |
| Author Id | string | The id of the author | author.id |
| Author Name | string | The name of the author | author.displayName |
| Author URL | string | The url of the author | author.url |
| Author Image URL | string | The URL of the image of the author | author.image.url |
| Labels | array of string | The list of this post&#x27;s labels | labels |
|  | string |  | labels |
| [Location](#location) | object | A Location blog object | location |
| Status | string | The status of the post | status |

### Location
A Location blog object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Location Name | string | The name of the location | name |
| Latitude | double | The latitude of the location | lat |
| Longitude | double | The longitude of the location | lng |
| Location Span | string | The viewport span. Can be used when rendering a map preview | span |

### BlogList
A list of Blogger blogs

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Blogs | Array of [Blog](#blog) | The list of blog items | items |

### Blog
A Blogger blog object

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Blog ID | string | The id of the blog | id |
| Blog name | string | The name of the blog | name |
| Blog description | string | The description of the blog | description |
| Published date | date-time | The published date of the blog | published |
| Updated date | date-time | The updated date of the blog | updated |
| Blog URL | string | The url of the blog | url |
| Status | string | The status of the blog | status |

### CreatePostRequest
A Blogger post object for new post requests

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Title | string | The title of the post | title |
| Content | string | The content of the post | content |
| Labels | array of string | The labels for the post | labels |
|  | string |  | labels |

### UpdatePostRequest
A Blogger post object for new post requests

| Summary | Type | Description | Path |
|---------|------|-------------|------|
| Title | string | The title of the post | title |
| Content | string | The content of the post | content |
| Labels | array of string | The labels for the post | labels |
|  | string |  | labels |

## Limits
| Name | Calls | Renewal Period |
|------|-------|----------------|
| API calls per connection | 5 | 60 seconds |
| Frequency of trigger polls | 1 | 300 seconds |

