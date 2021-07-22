// third_party/blink/public/mojom/webtransport/web_transport_connector.mojom.js is auto generated by mojom_bindings_generator.py, do not edit

// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {
  var mojomId = 'third_party/blink/public/mojom/webtransport/web_transport_connector.mojom';
  if (mojo.internal.isMojomLoaded(mojomId)) {
    console.warn('The following mojom is loaded multiple times: ' + mojomId);
    return;
  }
  mojo.internal.markMojomLoaded(mojomId);
  var bindings = mojo;
  var associatedBindings = mojo;
  var codec = mojo.internal;
  var validator = mojo.internal;

  var exports = mojo.internal.exposeNamespace('blink.mojom');
  var web_transport$ =
      mojo.internal.exposeNamespace('network.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'services/network/public/mojom/web_transport.mojom', '../../../../../services/network/public/mojom/web_transport.mojom.js');
  }
  var url$ =
      mojo.internal.exposeNamespace('url.mojom');
  if (mojo.config.autoLoadMojomDeps) {
    mojo.internal.loadMojomIfNecessary(
        'url/mojom/url.mojom', '../../../../../url/mojom/url.mojom.js');
  }



  function WebTransportConnector_Connect_Params(values) {
    this.initDefaults_();
    this.initFields_(values);
  }


  WebTransportConnector_Connect_Params.prototype.initDefaults_ = function() {
    this.url = null;
    this.fingerprints = null;
    this.client = new web_transport$.WebTransportHandshakeClientPtr();
  };
  WebTransportConnector_Connect_Params.prototype.initFields_ = function(fields) {
    for(var field in fields) {
        if (this.hasOwnProperty(field))
          this[field] = fields[field];
    }
  };

  WebTransportConnector_Connect_Params.validate = function(messageValidator, offset) {
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


    // validate WebTransportConnector_Connect_Params.url
    err = messageValidator.validateStructPointer(offset + codec.kStructHeaderSize + 0, url$.Url, false);
    if (err !== validator.validationError.NONE)
        return err;


    // validate WebTransportConnector_Connect_Params.fingerprints
    err = messageValidator.validateArrayPointer(offset + codec.kStructHeaderSize + 8, 8, new codec.PointerTo(web_transport$.WebTransportCertificateFingerprint), false, [0], 0);
    if (err !== validator.validationError.NONE)
        return err;


    // validate WebTransportConnector_Connect_Params.client
    err = messageValidator.validateInterface(offset + codec.kStructHeaderSize + 16, false);
    if (err !== validator.validationError.NONE)
        return err;

    return validator.validationError.NONE;
  };

  WebTransportConnector_Connect_Params.encodedSize = codec.kStructHeaderSize + 24;

  WebTransportConnector_Connect_Params.decode = function(decoder) {
    var packed;
    var val = new WebTransportConnector_Connect_Params();
    var numberOfBytes = decoder.readUint32();
    var version = decoder.readUint32();
    val.url =
        decoder.decodeStructPointer(url$.Url);
    val.fingerprints =
        decoder.decodeArrayPointer(new codec.PointerTo(web_transport$.WebTransportCertificateFingerprint));
    val.client =
        decoder.decodeStruct(new codec.Interface(web_transport$.WebTransportHandshakeClientPtr));
    return val;
  };

  WebTransportConnector_Connect_Params.encode = function(encoder, val) {
    var packed;
    encoder.writeUint32(WebTransportConnector_Connect_Params.encodedSize);
    encoder.writeUint32(0);
    encoder.encodeStructPointer(url$.Url, val.url);
    encoder.encodeArrayPointer(new codec.PointerTo(web_transport$.WebTransportCertificateFingerprint), val.fingerprints);
    encoder.encodeStruct(new codec.Interface(web_transport$.WebTransportHandshakeClientPtr), val.client);
  };
  var kWebTransportConnector_Connect_Name = 0;

  function WebTransportConnectorPtr(handleOrPtrInfo) {
    this.ptr = new bindings.InterfacePtrController(WebTransportConnector,
                                                   handleOrPtrInfo);
  }

  function WebTransportConnectorAssociatedPtr(associatedInterfacePtrInfo) {
    this.ptr = new associatedBindings.AssociatedInterfacePtrController(
        WebTransportConnector, associatedInterfacePtrInfo);
  }

  WebTransportConnectorAssociatedPtr.prototype =
      Object.create(WebTransportConnectorPtr.prototype);
  WebTransportConnectorAssociatedPtr.prototype.constructor =
      WebTransportConnectorAssociatedPtr;

  function WebTransportConnectorProxy(receiver) {
    this.receiver_ = receiver;
  }
  WebTransportConnectorPtr.prototype.connect = function() {
    return WebTransportConnectorProxy.prototype.connect
        .apply(this.ptr.getProxy(), arguments);
  };

  WebTransportConnectorProxy.prototype.connect = function(url, fingerprints, client) {
    var params_ = new WebTransportConnector_Connect_Params();
    params_.url = url;
    params_.fingerprints = fingerprints;
    params_.client = client;
    var builder = new codec.MessageV0Builder(
        kWebTransportConnector_Connect_Name,
        codec.align(WebTransportConnector_Connect_Params.encodedSize));
    builder.encodeStruct(WebTransportConnector_Connect_Params, params_);
    var message = builder.finish();
    this.receiver_.accept(message);
  };

  function WebTransportConnectorStub(delegate) {
    this.delegate_ = delegate;
  }
  WebTransportConnectorStub.prototype.connect = function(url, fingerprints, client) {
    return this.delegate_ && this.delegate_.connect && this.delegate_.connect(url, fingerprints, client);
  }

  WebTransportConnectorStub.prototype.accept = function(message) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    case kWebTransportConnector_Connect_Name:
      var params = reader.decodeStruct(WebTransportConnector_Connect_Params);
      this.connect(params.url, params.fingerprints, params.client);
      return true;
    default:
      return false;
    }
  };

  WebTransportConnectorStub.prototype.acceptWithResponder =
      function(message, responder) {
    var reader = new codec.MessageReader(message);
    switch (reader.messageName) {
    default:
      return false;
    }
  };

  function validateWebTransportConnectorRequest(messageValidator) {
    var message = messageValidator.message;
    var paramsClass = null;
    switch (message.getName()) {
      case kWebTransportConnector_Connect_Name:
        if (!message.expectsResponse() && !message.isResponse())
          paramsClass = WebTransportConnector_Connect_Params;
      break;
    }
    if (paramsClass === null)
      return validator.validationError.NONE;
    return paramsClass.validate(messageValidator, messageValidator.message.getHeaderNumBytes());
  }

  function validateWebTransportConnectorResponse(messageValidator) {
    return validator.validationError.NONE;
  }

  var WebTransportConnector = {
    name: 'blink.mojom.WebTransportConnector',
    kVersion: 0,
    ptrClass: WebTransportConnectorPtr,
    proxyClass: WebTransportConnectorProxy,
    stubClass: WebTransportConnectorStub,
    validateRequest: validateWebTransportConnectorRequest,
    validateResponse: null,
  };
  WebTransportConnectorStub.prototype.validator = validateWebTransportConnectorRequest;
  WebTransportConnectorProxy.prototype.validator = null;
  exports.WebTransportConnector = WebTransportConnector;
  exports.WebTransportConnectorPtr = WebTransportConnectorPtr;
  exports.WebTransportConnectorAssociatedPtr = WebTransportConnectorAssociatedPtr;
})();