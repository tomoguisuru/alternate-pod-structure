import { test, moduleForModel } from 'ember-qunit'

moduleForModel '<%= dasherizedModuleName %>', '<%= classifiedModuleName %>', {
  # Specify the other units that are required for this test.
<%= typeof needs !== 'undefined' ? needs : '' %>
}

test 'it exists', ->
  model = @subject()
  # store = @store()
  ok !!model
