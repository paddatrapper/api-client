/**
 * LibreTime API
 * Radio Broadcast & Automation Platform
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.LibreTimeApi);
  }
}(this, function(expect, LibreTimeApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LibreTimeApi.PatchedFile();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PatchedFile', function() {
    it('should create an instance of PatchedFile', function() {
      // uncomment below and update the code to test PatchedFile
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be.a(LibreTimeApi.PatchedFile);
    });

    it('should have the property itemUrl (base name: "item_url")', function() {
      // uncomment below and update the code to test the property itemUrl
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property mime (base name: "mime")', function() {
      // uncomment below and update the code to test the property mime
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property ftype (base name: "ftype")', function() {
      // uncomment below and update the code to test the property ftype
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property filepath (base name: "filepath")', function() {
      // uncomment below and update the code to test the property filepath
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property importStatus (base name: "import_status")', function() {
      // uncomment below and update the code to test the property importStatus
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property currentlyAccessing (base name: "currently_accessing")', function() {
      // uncomment below and update the code to test the property currentlyAccessing
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property mtime (base name: "mtime")', function() {
      // uncomment below and update the code to test the property mtime
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property utime (base name: "utime")', function() {
      // uncomment below and update the code to test the property utime
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property lptime (base name: "lptime")', function() {
      // uncomment below and update the code to test the property lptime
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property md5 (base name: "md5")', function() {
      // uncomment below and update the code to test the property md5
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property trackTitle (base name: "track_title")', function() {
      // uncomment below and update the code to test the property trackTitle
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property artistName (base name: "artist_name")', function() {
      // uncomment below and update the code to test the property artistName
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property bitRate (base name: "bit_rate")', function() {
      // uncomment below and update the code to test the property bitRate
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property sampleRate (base name: "sample_rate")', function() {
      // uncomment below and update the code to test the property sampleRate
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property format (base name: "format")', function() {
      // uncomment below and update the code to test the property format
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property length (base name: "length")', function() {
      // uncomment below and update the code to test the property length
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property albumTitle (base name: "album_title")', function() {
      // uncomment below and update the code to test the property albumTitle
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property genre (base name: "genre")', function() {
      // uncomment below and update the code to test the property genre
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property comments (base name: "comments")', function() {
      // uncomment below and update the code to test the property comments
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property year (base name: "year")', function() {
      // uncomment below and update the code to test the property year
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property trackNumber (base name: "track_number")', function() {
      // uncomment below and update the code to test the property trackNumber
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property channels (base name: "channels")', function() {
      // uncomment below and update the code to test the property channels
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property bpm (base name: "bpm")', function() {
      // uncomment below and update the code to test the property bpm
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property rating (base name: "rating")', function() {
      // uncomment below and update the code to test the property rating
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property encodedBy (base name: "encoded_by")', function() {
      // uncomment below and update the code to test the property encodedBy
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property discNumber (base name: "disc_number")', function() {
      // uncomment below and update the code to test the property discNumber
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property mood (base name: "mood")', function() {
      // uncomment below and update the code to test the property mood
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property composer (base name: "composer")', function() {
      // uncomment below and update the code to test the property composer
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property encoder (base name: "encoder")', function() {
      // uncomment below and update the code to test the property encoder
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property checksum (base name: "checksum")', function() {
      // uncomment below and update the code to test the property checksum
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property lyrics (base name: "lyrics")', function() {
      // uncomment below and update the code to test the property lyrics
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property orchestra (base name: "orchestra")', function() {
      // uncomment below and update the code to test the property orchestra
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property conductor (base name: "conductor")', function() {
      // uncomment below and update the code to test the property conductor
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property lyricist (base name: "lyricist")', function() {
      // uncomment below and update the code to test the property lyricist
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property originalLyricist (base name: "original_lyricist")', function() {
      // uncomment below and update the code to test the property originalLyricist
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property radioStationName (base name: "radio_station_name")', function() {
      // uncomment below and update the code to test the property radioStationName
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property infoUrl (base name: "info_url")', function() {
      // uncomment below and update the code to test the property infoUrl
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property artistUrl (base name: "artist_url")', function() {
      // uncomment below and update the code to test the property artistUrl
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property audioSourceUrl (base name: "audio_source_url")', function() {
      // uncomment below and update the code to test the property audioSourceUrl
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property radioStationUrl (base name: "radio_station_url")', function() {
      // uncomment below and update the code to test the property radioStationUrl
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property buyThisUrl (base name: "buy_this_url")', function() {
      // uncomment below and update the code to test the property buyThisUrl
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property isrcNumber (base name: "isrc_number")', function() {
      // uncomment below and update the code to test the property isrcNumber
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property catalogNumber (base name: "catalog_number")', function() {
      // uncomment below and update the code to test the property catalogNumber
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property originalArtist (base name: "original_artist")', function() {
      // uncomment below and update the code to test the property originalArtist
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property copyright (base name: "copyright")', function() {
      // uncomment below and update the code to test the property copyright
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property reportDatetime (base name: "report_datetime")', function() {
      // uncomment below and update the code to test the property reportDatetime
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property reportLocation (base name: "report_location")', function() {
      // uncomment below and update the code to test the property reportLocation
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property reportOrganization (base name: "report_organization")', function() {
      // uncomment below and update the code to test the property reportOrganization
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property contributor (base name: "contributor")', function() {
      // uncomment below and update the code to test the property contributor
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property fileExists (base name: "file_exists")', function() {
      // uncomment below and update the code to test the property fileExists
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property replayGain (base name: "replay_gain")', function() {
      // uncomment below and update the code to test the property replayGain
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property cuein (base name: "cuein")', function() {
      // uncomment below and update the code to test the property cuein
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property cueout (base name: "cueout")', function() {
      // uncomment below and update the code to test the property cueout
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property silanCheck (base name: "silan_check")', function() {
      // uncomment below and update the code to test the property silanCheck
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property hidden (base name: "hidden")', function() {
      // uncomment below and update the code to test the property hidden
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property isScheduled (base name: "is_scheduled")', function() {
      // uncomment below and update the code to test the property isScheduled
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property isPlaylist (base name: "is_playlist")', function() {
      // uncomment below and update the code to test the property isPlaylist
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property filesize (base name: "filesize")', function() {
      // uncomment below and update the code to test the property filesize
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property artwork (base name: "artwork")', function() {
      // uncomment below and update the code to test the property artwork
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property trackType (base name: "track_type")', function() {
      // uncomment below and update the code to test the property trackType
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property directory (base name: "directory")', function() {
      // uncomment below and update the code to test the property directory
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property editedBy (base name: "edited_by")', function() {
      // uncomment below and update the code to test the property editedBy
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instance = new LibreTimeApi.PatchedFile();
      //expect(instance).to.be();
    });

  });

}));