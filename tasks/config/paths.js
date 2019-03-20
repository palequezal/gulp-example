'use strict'

export const Source = {
  javascript: "assets/javascripts",
  styles: "assets/stylesheets",
}

export const Temp = {
  javascript: Source.javascript + "/temp",
  styles: Source.styles + "/temp"
}

export const Dest = {
  javascript: "public/javascripts",
  styles: "public/stylesheets"
}

