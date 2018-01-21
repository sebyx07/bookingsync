#!/bin/bash
rails db:drop && rails db:create && rails db:migrate
