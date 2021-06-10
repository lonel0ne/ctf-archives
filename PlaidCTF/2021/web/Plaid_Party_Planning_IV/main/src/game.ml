open! Core_kernel
open! Import

type t =
  { id : Game_id.t
  ; name : string
  ; icon_path : Filename.t
  ; attributes : Game_attribute.t list
  }
[@@deriving fields, sexp_of]
