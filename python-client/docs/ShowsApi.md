# libretime_client.ShowsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**shows_create**](ShowsApi.md#shows_create) | **POST** /api/v2/shows/ | 
[**shows_destroy**](ShowsApi.md#shows_destroy) | **DELETE** /api/v2/shows/{id}/ | 
[**shows_list**](ShowsApi.md#shows_list) | **GET** /api/v2/shows/ | 
[**shows_partial_update**](ShowsApi.md#shows_partial_update) | **PATCH** /api/v2/shows/{id}/ | 
[**shows_retrieve**](ShowsApi.md#shows_retrieve) | **GET** /api/v2/shows/{id}/ | 
[**shows_update**](ShowsApi.md#shows_update) | **PUT** /api/v2/shows/{id}/ | 


# **shows_create**
> Show shows_create(show)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import shows_api
from libretime_client.model.show import Show
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime_client.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = shows_api.ShowsApi(api_client)
    show = Show(
        name="name_example",
        url="url_example",
        genre="genre_example",
        description="description_example",
        color="color_example",
        background_color="background_color_example",
        linked=True,
        is_linkable=True,
        image_path="image_path_example",
        has_autoplaylist=True,
        autoplaylist_repeat=True,
        autoplaylist="autoplaylist_example",
    ) # Show | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.shows_create(show)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ShowsApi->shows_create: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **show** | [**Show**](Show.md)|  |

### Return type

[**Show**](Show.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shows_destroy**
> shows_destroy(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import shows_api
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime_client.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = shows_api.ShowsApi(api_client)
    id = 1 # int | A unique integer value identifying this show.

    # example passing only required values which don't have defaults set
    try:
        api_instance.shows_destroy(id)
    except libretime_client.ApiException as e:
        print("Exception when calling ShowsApi->shows_destroy: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this show. |

### Return type

void (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shows_list**
> [Show] shows_list()



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import shows_api
from libretime_client.model.show import Show
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime_client.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = shows_api.ShowsApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        api_response = api_instance.shows_list()
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ShowsApi->shows_list: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**[Show]**](Show.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shows_partial_update**
> Show shows_partial_update(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import shows_api
from libretime_client.model.patched_show import PatchedShow
from libretime_client.model.show import Show
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime_client.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = shows_api.ShowsApi(api_client)
    id = 1 # int | A unique integer value identifying this show.
    patched_show = PatchedShow(
        name="name_example",
        url="url_example",
        genre="genre_example",
        description="description_example",
        color="color_example",
        background_color="background_color_example",
        linked=True,
        is_linkable=True,
        image_path="image_path_example",
        has_autoplaylist=True,
        autoplaylist_repeat=True,
        autoplaylist="autoplaylist_example",
    ) # PatchedShow |  (optional)

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.shows_partial_update(id)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ShowsApi->shows_partial_update: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        api_response = api_instance.shows_partial_update(id, patched_show=patched_show)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ShowsApi->shows_partial_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this show. |
 **patched_show** | [**PatchedShow**](PatchedShow.md)|  | [optional]

### Return type

[**Show**](Show.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shows_retrieve**
> Show shows_retrieve(id)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import shows_api
from libretime_client.model.show import Show
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime_client.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = shows_api.ShowsApi(api_client)
    id = 1 # int | A unique integer value identifying this show.

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.shows_retrieve(id)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ShowsApi->shows_retrieve: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this show. |

### Return type

[**Show**](Show.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shows_update**
> Show shows_update(id, show)



### Example

* Basic Authentication (basicAuth):
* Api Key Authentication (cookieAuth):

```python
import time
import libretime_client
from libretime_client.api import shows_api
from libretime_client.model.show import Show
from pprint import pprint
# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = libretime_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: basicAuth
configuration = libretime_client.Configuration(
    username = 'YOUR_USERNAME',
    password = 'YOUR_PASSWORD'
)

# Configure API key authorization: cookieAuth
configuration.api_key['cookieAuth'] = 'YOUR_API_KEY'

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['cookieAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with libretime_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = shows_api.ShowsApi(api_client)
    id = 1 # int | A unique integer value identifying this show.
    show = Show(
        name="name_example",
        url="url_example",
        genre="genre_example",
        description="description_example",
        color="color_example",
        background_color="background_color_example",
        linked=True,
        is_linkable=True,
        image_path="image_path_example",
        has_autoplaylist=True,
        autoplaylist_repeat=True,
        autoplaylist="autoplaylist_example",
    ) # Show | 

    # example passing only required values which don't have defaults set
    try:
        api_response = api_instance.shows_update(id, show)
        pprint(api_response)
    except libretime_client.ApiException as e:
        print("Exception when calling ShowsApi->shows_update: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| A unique integer value identifying this show. |
 **show** | [**Show**](Show.md)|  |

### Return type

[**Show**](Show.md)

### Authorization

[basicAuth](../README.md#basicAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

