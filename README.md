# Boil timer RN with TS
- This project using for React Native CLI
    - Development OS: macOS
    - Target OS: iOS
* If you want another Development and Target OS, Please check [React Native offical DOCS](https://reactnative.dev/docs/environment-setup)

# Reference
- [React Native 개발 시작하기](https://wit.nts-corp.com/2020/03/23/6014) 
- [React Native: 웹개발자가 한달만에 앱 출시하기](https://www.slideshare.net/deview/121react-native)
- [React Native: 디버깅](https://medium.com/duckuism/react-native-%EB%94%94%EB%B2%84%EA%B9%85-%ED%99%98%EA%B2%BD-%EB%A7%8C%EB%93%A4%EA%B8%B0-7e46bfe89f6)
- [Yellow](http://www.flatuicolorpicker.com/yellow-rgba-color-model/)

# Install dependencies
1. Install dependencies modules
```
$ brew install node
$ brew install watchman
```
2. Xcode & CocoaPods
    - Install iOS Simulator and XCode
    - Install ```CocoaPods``` 
        - ```$ sudo gem install cocoapods```

# Start
 1. Open Terminal ```$ yarn run start```
 2. Open New Termianl ```$ yarn run ios```

 # Dependencies modules
 - [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver): 절대경로 지정
 - [react-native-debugger-open](https://github.com/jhen0409/react-native-debugger): 디버깅 모드 할 때 크롬이 먼저 열리는데 이를 방지하고 react-native-debugger가 열리도록 바꾸는 툴
 - [react-navigation](https://reactnavigation.org/docs/getting-started): route 이동
 - [@react-navigation/stack](https://reactnavigation.org/docs/stack-navigator/): web 처럼 router stack 제공