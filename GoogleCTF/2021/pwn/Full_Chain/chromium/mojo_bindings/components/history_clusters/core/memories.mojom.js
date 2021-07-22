// components/history_clusters/core/memories.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'components/history_clusters/core/memories.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('historyClusters.mojom');
  var string16$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/string16.mojom', '../../../mojo/public/mojom/base/string16.mojom.js');
  }
  var time$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/time.mojom', '../../../mojo/public/mojom/base/time.mojom.js');
  }
  var token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/token.mojom', '../../../mojo/public/mojom/base/token.mojom.js');
  }
  var unguessable_token$ =
      mojo.internal.exposeNamespace('mojoBase.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'mojo/public/mojom/base/unguessable_token.mojom', '../../../mojo/public/mojom/base/unguessable_token.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../url/mojom/url.mojom.js');
  }



  function SearchQuery(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  SearchQuery.prototype.initDefaults_ = function() {
    this.query = null;
    this.url = null;
  };
  SearchQuery.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  SearchQuery.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 24}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate SearchQuery.query
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate SearchQuery.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  SearchQuery.encodedSize = codec.kStructHeaderSize + 16;

  SearchQuery.decode = function(decoder) {
    var packed;
    var val = new SearchQuery();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.query =
        decoder.decodeStruct(codec.String);
    val.url =
        decoder.decodeStructPointer(url$.Url);
    return val;
  };

  SearchQuery.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(SearchQuery.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.query);
    encoder.encodeStructPointer(url$.Url, val.url);
  };
  function WebPage(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebPage.prototype.initDefaults_ = function() {
    this.url = null;
    this.title = null;
    this.thumbnailUrl = null;
  };
  WebPage.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebPage.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate WebPage.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate WebPage.title
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate WebPage.thumbnailUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 16, url$.Url, true);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebPage.encodedSize = codec.kStructHeaderSize + 24;

  WebPage.decode = function(decoder) {
    var packed;
    var val = new WebPage();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url =
        decoder.decodeStructPointer(url$.Url);
    val.title =
        decoder.decodeStruct(codec.String);
    val.thumbnailUrl =
        decoder.decodeStructPointer(url$.Url);
    return val;
  };

  WebPage.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebPage.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.String, val.title);
    encoder.encodeStructPointer(url$.Url, val.thumbnailUrl);
  };
  function TabGroup(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  TabGroup.prototype.initDefaults_ = function() {
    this.id = null;
    this.title = null;
    this.pages = null;
  };
  TabGroup.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  TabGroup.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TabGroup.id
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, token$.Token, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate TabGroup.title
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 8, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate TabGroup.pages
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(WebPage), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  TabGroup.encodedSize = codec.kStructHeaderSize + 24;

  TabGroup.decode = function(decoder) {
    var packed;
    var val = new TabGroup();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id =
        decoder.decodeStructPointer(token$.Token);
    val.title =
        decoder.decodeStruct(codec.String);
    val.pages =
        decoder.decodeArrayPointer(new codec.PointerTo(WebPage));
    return val;
  };

  TabGroup.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(TabGroup.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(token$.Token, val.id);
    encoder.encodeStruct(codec.String, val.title);
    encoder.encodeArrayPointer(new codec.PointerTo(WebPage), val.pages);
  };
  function Visit(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Visit.prototype.initDefaults_ = function() {
    this.id = 0;
    this.url = null;
    this.pageTitle = null;
    this.thumbnailUrl = null;
    this.time = null;
    this.firstVisitTime = null;
    this.relativeDate = null;
    this.timeOfDay = null;
    this.numDuplicateVisits = 0;
    this.relatedVisits = null;
    this.engagementScore = 0;
  };
  Visit.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Visit.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 96}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;



    // validate Visit.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Visit.pageTitle
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 16, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Visit.thumbnailUrl
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 24, url$.Url, true);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Visit.time
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 32, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Visit.firstVisitTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 40, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Visit.relativeDate
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 48, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate Visit.timeOfDay
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 56, false)
    if (err !== validator.validationError.NONE)
        return err;



    // validate Visit.relatedVisits
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 72, 8, new codec.PointerTo(Visit), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Visit.encodedSize = codec.kStructHeaderSize + 88;

  Visit.decode = function(decoder) {
    var packed;
    var val = new Visit();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id =
        decoder.decodeStruct(codec.Int64);
    val.url =
        decoder.decodeStructPointer(url$.Url);
    val.pageTitle =
        decoder.decodeStruct(codec.String);
    val.thumbnailUrl =
        decoder.decodeStructPointer(url$.Url);
    val.time =
        decoder.decodeStructPointer(time$.Time);
    val.firstVisitTime =
        decoder.decodeStructPointer(time$.Time);
    val.relativeDate =
        decoder.decodeStruct(codec.String);
    val.timeOfDay =
        decoder.decodeStruct(codec.String);
    val.numDuplicateVisits =
        decoder.decodeStruct(codec.Int32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    val.relatedVisits =
        decoder.decodeArrayPointer(new codec.PointerTo(Visit));
    val.engagementScore =
        decoder.decodeStruct(codec.Double);
    return val;
  };

  Visit.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Visit.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.Int64, val.id);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeStruct(codec.String, val.pageTitle);
    encoder.encodeStructPointer(url$.Url, val.thumbnailUrl);
    encoder.encodeStructPointer(time$.Time, val.time);
    encoder.encodeStructPointer(time$.Time, val.firstVisitTime);
    encoder.encodeStruct(codec.String, val.relativeDate);
    encoder.encodeStruct(codec.String, val.timeOfDay);
    encoder.encodeStruct(codec.Int32, val.numDuplicateVisits);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.encodeArrayPointer(new codec.PointerTo(Visit), val.relatedVisits);
    encoder.encodeStruct(codec.Double, val.engagementScore);
  };
  function Memory(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  Memory.prototype.initDefaults_ = function() {
    this.id = null;
    this.topVisits = null;
    this.keywords = null;
    this.relatedSearches = null;
    this.relatedTabGroups = null;
    this.bookmarks = null;
    this.lastVisitTime = null;
    this.engagementScore = 0;
  };
  Memory.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  Memory.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 72}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Memory.id
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, unguessable_token$.UnguessableToken, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Memory.topVisits
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(Visit), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Memory.keywords
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 16, 8, new codec.PointerTo(string16$.String16), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Memory.relatedSearches
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 24, 8, new codec.PointerTo(SearchQuery), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Memory.relatedTabGroups
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 32, 8, new codec.PointerTo(TabGroup), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Memory.bookmarks
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 40, 8, new codec.PointerTo(WebPage), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate Memory.lastVisitTime
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 48, time$.Time, false);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  Memory.encodedSize = codec.kStructHeaderSize + 64;

  Memory.decode = function(decoder) {
    var packed;
    var val = new Memory();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.id =
        decoder.decodeStructPointer(unguessable_token$.UnguessableToken);
    val.topVisits =
        decoder.decodeArrayPointer(new codec.PointerTo(Visit));
    val.keywords =
        decoder.decodeArrayPointer(new codec.PointerTo(string16$.String16));
    val.relatedSearches =
        decoder.decodeArrayPointer(new codec.PointerTo(SearchQuery));
    val.relatedTabGroups =
        decoder.decodeArrayPointer(new codec.PointerTo(TabGroup));
    val.bookmarks =
        decoder.decodeArrayPointer(new codec.PointerTo(WebPage));
    val.lastVisitTime =
        decoder.decodeStructPointer(time$.Time);
    val.engagementScore =
        decoder.decodeStruct(codec.Double);
    return val;
  };

  Memory.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(Memory.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(unguessable_token$.UnguessableToken, val.id);
    encoder.encodeArrayPointer(new codec.PointerTo(Visit), val.topVisits);
    encoder.encodeArrayPointer(new codec.PointerTo(string16$.String16), val.keywords);
    encoder.encodeArrayPointer(new codec.PointerTo(SearchQuery), val.relatedSearches);
    encoder.encodeArrayPointer(new codec.PointerTo(TabGroup), val.relatedTabGroups);
    encoder.encodeArrayPointer(new codec.PointerTo(WebPage), val.bookmarks);
    encoder.encodeStructPointer(time$.Time, val.lastVisitTime);
    encoder.encodeStruct(codec.Double, val.engagementScore);
  };
  function QueryParams(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  QueryParams.prototype.initDefaults_ = function() {
    this.query = null;
    this.recencyThreshold = null;
    this.maxCount = 0;
  };
  QueryParams.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  QueryParams.validate = function(messageValidator, offset) {
    var err;
    err = messageValidator.validateStructHeader(offset, codec.kStructHeaderSize);
    if (err !== validator.validationError.NONE)
        return err;

    var kVersionSizes = [
      {version: 0, numBytes: 32}
    ];
    err = messageValidator.validateStructVersion(offset, kVersionSizes);
    if (err !== validator.validationError.NONE)
        return err;


    // validate QueryParams.query
    err = messageValidator.validateStringPointer(offset + codec.kStructHeaderSize + 0, false)
    if (err !== validator.validationError.NONE)
        return err;


    // validate QueryParams.recencyThreshold
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 8, time$.Time, true);
    if (err !== validator.validationError.NONE)
        return err;


    return validator.validationError.NONE;
  };

  QueryParams.encodedSize = codec.kStructHeaderSize + 24;

  QueryParams.decode = function(decoder) {
    var packed;
    var val = new QueryParams();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.query =
        decoder.decodeStruct(codec.String);
    val.recencyThreshold =
        decoder.decodeStructPointer(time$.Time);
    val.maxCount =
        decoder.decodeStruct(codec.Uint32);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    decoder.skip(1);
    return val;
  };

  QueryParams.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(QueryParams.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStruct(codec.String, val.query);
    encoder.encodeStructPointer(time$.Time, val.recencyThreshold);
    encoder.encodeStruct(codec.Uint32, val.maxCount);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
    encoder.skip(1);
  };
  exports.SearchQuery = SearchQuery;
  exports.WebPage = WebPage;
  exports.TabGroup = TabGroup;
  exports.Visit = Visit;
  exports.Memory = Memory;
  exports.QueryParams = QueryParams;
})();