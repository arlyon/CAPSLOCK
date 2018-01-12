---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: {{ .Date }}
draft: true
tags: ["gist", "code"]
categories: ["Gists"]
user: "USER_ID"
gist: "GIST_ID"
# last two are used in schema.org/SoftwareSourceCode
language: "Python"
runtime: "Python 3.6"
---