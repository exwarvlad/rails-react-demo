# frozen_string_literal: true
require 'open-uri'

URI_OF_JSON = 'https://gist.github.com/NathanielWroblewski/bc9ddacbf60561bfa60e7283e8dda44d/raw/3346fd9e1550f5b2f13970c4fa08f40b28b09f01/data.json'
FOUNDER = JSON.load(open(URI_OF_JSON)).freeze
