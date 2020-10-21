FROM ruby:2.7.2-alpine
LABEL maintainer="bcrivelaro"

RUN apk --update add build-base postgresql-client postgresql-dev \
  tzdata bash less && rm -rf /var/cache/apk/

ENV APP_HOME /contacts
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

COPY Gemfile Gemfile.lock $APP_HOME/
RUN bundle install

COPY . $APP_HOME

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]