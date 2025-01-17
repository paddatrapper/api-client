<?php
/**
 * Webstream
 *
 * PHP version 7.3
 *
 * @category Class
 * @package  Libretime\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * LibreTime API
 *
 * Radio Broadcast & Automation Platform
 *
 * The version of the OpenAPI document: 2.0.0
 * Generated by: https://openapi-generator.tech
 * OpenAPI Generator version: 6.0.0-beta
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace Libretime\Client\Model;

use \ArrayAccess;
use \Libretime\Client\ObjectSerializer;

/**
 * Webstream Class Doc Comment
 *
 * @category Class
 * @package  Libretime\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<TKey, TValue>
 * @template TKey int|null
 * @template TValue mixed|null
 */
class Webstream implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'Webstream';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'item_url' => 'string',
        'id' => 'int',
        'name' => 'string',
        'description' => 'string',
        'url' => 'string',
        'length' => 'string',
        'creator_id' => 'int',
        'mtime' => '\DateTime',
        'utime' => '\DateTime',
        'lptime' => '\DateTime',
        'mime' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'item_url' => 'uri',
        'id' => null,
        'name' => null,
        'description' => null,
        'url' => null,
        'length' => null,
        'creator_id' => null,
        'mtime' => 'date-time',
        'utime' => 'date-time',
        'lptime' => 'date-time',
        'mime' => null
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPITypes()
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPIFormats()
    {
        return self::$openAPIFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'item_url' => 'item_url',
        'id' => 'id',
        'name' => 'name',
        'description' => 'description',
        'url' => 'url',
        'length' => 'length',
        'creator_id' => 'creator_id',
        'mtime' => 'mtime',
        'utime' => 'utime',
        'lptime' => 'lptime',
        'mime' => 'mime'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'item_url' => 'setItemUrl',
        'id' => 'setId',
        'name' => 'setName',
        'description' => 'setDescription',
        'url' => 'setUrl',
        'length' => 'setLength',
        'creator_id' => 'setCreatorId',
        'mtime' => 'setMtime',
        'utime' => 'setUtime',
        'lptime' => 'setLptime',
        'mime' => 'setMime'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'item_url' => 'getItemUrl',
        'id' => 'getId',
        'name' => 'getName',
        'description' => 'getDescription',
        'url' => 'getUrl',
        'length' => 'getLength',
        'creator_id' => 'getCreatorId',
        'mtime' => 'getMtime',
        'utime' => 'getUtime',
        'lptime' => 'getLptime',
        'mime' => 'getMime'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$openAPIModelName;
    }


    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['item_url'] = $data['item_url'] ?? null;
        $this->container['id'] = $data['id'] ?? null;
        $this->container['name'] = $data['name'] ?? null;
        $this->container['description'] = $data['description'] ?? null;
        $this->container['url'] = $data['url'] ?? null;
        $this->container['length'] = $data['length'] ?? null;
        $this->container['creator_id'] = $data['creator_id'] ?? null;
        $this->container['mtime'] = $data['mtime'] ?? null;
        $this->container['utime'] = $data['utime'] ?? null;
        $this->container['lptime'] = $data['lptime'] ?? null;
        $this->container['mime'] = $data['mime'] ?? null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['item_url'] === null) {
            $invalidProperties[] = "'item_url' can't be null";
        }
        if ($this->container['id'] === null) {
            $invalidProperties[] = "'id' can't be null";
        }
        if ($this->container['name'] === null) {
            $invalidProperties[] = "'name' can't be null";
        }
        if ((mb_strlen($this->container['name']) > 255)) {
            $invalidProperties[] = "invalid value for 'name', the character length must be smaller than or equal to 255.";
        }

        if ($this->container['description'] === null) {
            $invalidProperties[] = "'description' can't be null";
        }
        if ((mb_strlen($this->container['description']) > 255)) {
            $invalidProperties[] = "invalid value for 'description', the character length must be smaller than or equal to 255.";
        }

        if ($this->container['url'] === null) {
            $invalidProperties[] = "'url' can't be null";
        }
        if ((mb_strlen($this->container['url']) > 512)) {
            $invalidProperties[] = "invalid value for 'url', the character length must be smaller than or equal to 512.";
        }

        if ($this->container['length'] === null) {
            $invalidProperties[] = "'length' can't be null";
        }
        if ($this->container['creator_id'] === null) {
            $invalidProperties[] = "'creator_id' can't be null";
        }
        if (($this->container['creator_id'] > 2147483647)) {
            $invalidProperties[] = "invalid value for 'creator_id', must be smaller than or equal to 2147483647.";
        }

        if (($this->container['creator_id'] < -2147483648)) {
            $invalidProperties[] = "invalid value for 'creator_id', must be bigger than or equal to -2147483648.";
        }

        if ($this->container['mtime'] === null) {
            $invalidProperties[] = "'mtime' can't be null";
        }
        if ($this->container['utime'] === null) {
            $invalidProperties[] = "'utime' can't be null";
        }
        if (!is_null($this->container['mime']) && (mb_strlen($this->container['mime']) > 1024)) {
            $invalidProperties[] = "invalid value for 'mime', the character length must be smaller than or equal to 1024.";
        }

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets item_url
     *
     * @return string
     */
    public function getItemUrl()
    {
        return $this->container['item_url'];
    }

    /**
     * Sets item_url
     *
     * @param string $item_url item_url
     *
     * @return self
     */
    public function setItemUrl($item_url)
    {
        $this->container['item_url'] = $item_url;

        return $this;
    }

    /**
     * Gets id
     *
     * @return int
     */
    public function getId()
    {
        return $this->container['id'];
    }

    /**
     * Sets id
     *
     * @param int $id id
     *
     * @return self
     */
    public function setId($id)
    {
        $this->container['id'] = $id;

        return $this;
    }

    /**
     * Gets name
     *
     * @return string
     */
    public function getName()
    {
        return $this->container['name'];
    }

    /**
     * Sets name
     *
     * @param string $name name
     *
     * @return self
     */
    public function setName($name)
    {
        if ((mb_strlen($name) > 255)) {
            throw new \InvalidArgumentException('invalid length for $name when calling Webstream., must be smaller than or equal to 255.');
        }

        $this->container['name'] = $name;

        return $this;
    }

    /**
     * Gets description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->container['description'];
    }

    /**
     * Sets description
     *
     * @param string $description description
     *
     * @return self
     */
    public function setDescription($description)
    {
        if ((mb_strlen($description) > 255)) {
            throw new \InvalidArgumentException('invalid length for $description when calling Webstream., must be smaller than or equal to 255.');
        }

        $this->container['description'] = $description;

        return $this;
    }

    /**
     * Gets url
     *
     * @return string
     */
    public function getUrl()
    {
        return $this->container['url'];
    }

    /**
     * Sets url
     *
     * @param string $url url
     *
     * @return self
     */
    public function setUrl($url)
    {
        if ((mb_strlen($url) > 512)) {
            throw new \InvalidArgumentException('invalid length for $url when calling Webstream., must be smaller than or equal to 512.');
        }

        $this->container['url'] = $url;

        return $this;
    }

    /**
     * Gets length
     *
     * @return string
     */
    public function getLength()
    {
        return $this->container['length'];
    }

    /**
     * Sets length
     *
     * @param string $length length
     *
     * @return self
     */
    public function setLength($length)
    {
        $this->container['length'] = $length;

        return $this;
    }

    /**
     * Gets creator_id
     *
     * @return int
     */
    public function getCreatorId()
    {
        return $this->container['creator_id'];
    }

    /**
     * Sets creator_id
     *
     * @param int $creator_id creator_id
     *
     * @return self
     */
    public function setCreatorId($creator_id)
    {

        if (($creator_id > 2147483647)) {
            throw new \InvalidArgumentException('invalid value for $creator_id when calling Webstream., must be smaller than or equal to 2147483647.');
        }
        if (($creator_id < -2147483648)) {
            throw new \InvalidArgumentException('invalid value for $creator_id when calling Webstream., must be bigger than or equal to -2147483648.');
        }

        $this->container['creator_id'] = $creator_id;

        return $this;
    }

    /**
     * Gets mtime
     *
     * @return \DateTime
     */
    public function getMtime()
    {
        return $this->container['mtime'];
    }

    /**
     * Sets mtime
     *
     * @param \DateTime $mtime mtime
     *
     * @return self
     */
    public function setMtime($mtime)
    {
        $this->container['mtime'] = $mtime;

        return $this;
    }

    /**
     * Gets utime
     *
     * @return \DateTime
     */
    public function getUtime()
    {
        return $this->container['utime'];
    }

    /**
     * Sets utime
     *
     * @param \DateTime $utime utime
     *
     * @return self
     */
    public function setUtime($utime)
    {
        $this->container['utime'] = $utime;

        return $this;
    }

    /**
     * Gets lptime
     *
     * @return \DateTime|null
     */
    public function getLptime()
    {
        return $this->container['lptime'];
    }

    /**
     * Sets lptime
     *
     * @param \DateTime|null $lptime lptime
     *
     * @return self
     */
    public function setLptime($lptime)
    {
        $this->container['lptime'] = $lptime;

        return $this;
    }

    /**
     * Gets mime
     *
     * @return string|null
     */
    public function getMime()
    {
        return $this->container['mime'];
    }

    /**
     * Sets mime
     *
     * @param string|null $mime mime
     *
     * @return self
     */
    public function setMime($mime)
    {
        if (!is_null($mime) && (mb_strlen($mime) > 1024)) {
            throw new \InvalidArgumentException('invalid length for $mime when calling Webstream., must be smaller than or equal to 1024.');
        }

        $this->container['mime'] = $mime;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset): bool
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed|null
     */
    #[\ReturnTypeWillChange]
    public function offsetGet($offset)
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param int|null $offset Offset
     * @param mixed    $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value): void
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset): void
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     * @link https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed Returns data which can be serialized by json_encode(), which is a value
     * of any type other than a resource.
     */
    #[\ReturnTypeWillChange]
    public function jsonSerialize()
    {
       return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_PRETTY_PRINT
        );
    }

    /**
     * Gets a header-safe presentation of the object
     *
     * @return string
     */
    public function toHeaderValue()
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


