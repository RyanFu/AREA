FROM openjdk:8

ENV SDK_URL="https://dl.google.com/android/repository/sdk-tools-linux-3859397.zip" \
    ANDROID_HOME="/usr/local/android-sdk" \
    ANDROID_VERSION=26 \
    ANDROID_BUILD_TOOLS_VERSION=26.0.2

RUN mkdir "$ANDROID_HOME" .android \
    && cd "$ANDROID_HOME" \
    && curl -o sdk.zip $SDK_URL \
    && unzip sdk.zip \
    && rm sdk.zip \
    && yes | $ANDROID_HOME/tools/bin/sdkmanager --licenses

RUN $ANDROID_HOME/tools/bin/sdkmanager --update
RUN $ANDROID_HOME/tools/bin/sdkmanager "build-tools;${ANDROID_BUILD_TOOLS_VERSION}" \
    "platforms;android-${ANDROID_VERSION}" \
    "platform-tools"

RUN apt-get update && apt-get install build-essential -y && apt-get install file -y && apt-get install apt-utils -y && apt-get install npm -y && npm install -g npx && npm install yarn -g

COPY package*.json /mobile/
COPY yarn.lock /mobile/

RUN yarn install

COPY . /mobile/
WORKDIR /mobile

# RUN keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 4096 -validity 10000
# RUN cd android && ./gradlew clean
# RUN rm -rf android/app/src/main/assets
# RUN mkdir android/app/src/main/assets
# RUN npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
# RUN rm -rf android/app/src/main/res/drawable-*
# RUN rm -rf android/app/src/main/res/raw
RUN cd android && ./gradlew assembleRelease
