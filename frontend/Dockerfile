FROM node:8.5.0

# ember server on port 4200
# livereload server on port 49152
EXPOSE 4200 49152
WORKDIR /myapp

# run ember server on container start
ENTRYPOINT ["/usr/local/bin/ember"]
CMD ["server"]

# install watchman
# Note: See the README.md to find out how to increase the
# fs.inotify.max_user_watches value so that watchman will
# work better with ember projects.
RUN \
	git clone https://github.com/facebook/watchman.git &&\
	cd watchman &&\
	git checkout v3.5.0 &&\
	./autogen.sh &&\
	./configure &&\
	make &&\
	make install

# Note: npm is v3.10.8
RUN \
	npm install -g ember-cli@3.0.0-beta.1 yarn
