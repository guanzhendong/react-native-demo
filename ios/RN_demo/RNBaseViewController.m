//
//  RNBaseViewController.m
//  RN_demo
//
//  Created by ec on 2018/3/22.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "RNBaseViewController.h"
#import <React/RCTRootView.h>
#import <React/RCTBundleURLProvider.h>

@interface RNBaseViewController ()
@property (nonatomic, strong) NSDictionary *props;
@end

@implementation RNBaseViewController

- (instancetype)initWithProps:(NSDictionary *)props {
    self = [super init];
    if (self) {
        _props = [NSDictionary dictionaryWithDictionary:props];
    }
    return self;
}

- (void)dealloc {
  [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (void)viewDidLoad {
    [super viewDidLoad];
  
  self.title = @"RN VC";
  
  //@"rndemo"
  
  NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:self.props[@"moduleName"]
                                               initialProperties:nil
                                                   launchOptions:nil];
  self.view = rootView;
  
  
  [self initNotification];
}

- (void)initNotification{
  [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(pushToNativeVC:) name:@"pushToNativeVC" object:nil];
}

- (void)pushToNativeVC:(NSNotification *)noti {
  NSDictionary *dic = noti.object;
  NSLog(@"RN data: %@",dic);
}

@end
