# PearBudget Junior

I'm just recording some steps in the setup of a very basic app. It's all public. If you see bugs in the code, please let me know.


## Process

### Setup at Github

##### at Github, create new app, "pbjr"

### Setup Locally

##### in Terminal:

    $ rails new pbjr

    $ cd pbjr

    $ git init

    $ git add .

    $ git commit -am "First commit. Added Rails app."

    $ git remote add origin git@github.com:charliepark/pbjr.git

    $ git push origin master

    $ touch README.md

    $ rm README

    $ git add .

    $ git commit -am "Replaced README with README.md"

    $ git push



### Installing Devise

##### in Terminal

    $ gem update devise

##### in Gemfile, line 5-ish

    gem 'devise'

##### in Terminal

    $ rails generate devise:install

##### in config/environments/development.rb

  add "config.action_mailer.default_url_options = { :host => 'localhost:3000' }" just before the 'end'

##### in config/routes.rb

	uncomment the root :to line (around line 51)

##### in app/views/layouts/application.html.erb

  add the following two lines to the template:
	  <p class="notice"><%= notice %></p>
	  <p class="alert"><%= alert %></p>

##### in Terminal

    $ rails generate devise User

    $ rake db:migrate

		$ git add .
		
		$ git commit -am "Added Devise."
		
		$ git push



#### NEXT:

	- try writing some tests
	-	Begin setting up other models for budget and receipts and whatnot.
	-	Create friendlier routes for sign_up and other account actions
