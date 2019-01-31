//
//  RNManager.m
//  RN_demo
//
//  Created by ec on 2018/3/22.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "RNManager.h"
#import <UIKit/UIKit.h>

@implementation RNManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(alertWithTitle:(NSString *)title content:(NSString *)content) {
  dispatch_async(dispatch_get_main_queue(), ^{
    UIAlertView *alert = [[UIAlertView alloc] initWithTitle:title message:content delegate:nil cancelButtonTitle:@"确定" otherButtonTitles:nil, nil];
    [alert show];
  });
}

RCT_EXPORT_METHOD(doSomething:(id)obj) {
  NSLog(@"%@",obj);
}

RCT_EXPORT_METHOD(callbackMethod:(RCTResponseSenderBlock)back) {
  back(@[@"dada"]);
}

RCT_EXPORT_METHOD(pushToNativeVC:(NSDictionary *)obj) {
  [[NSNotificationCenter defaultCenter] postNotificationName:@"pushToNativeVC" object:obj[@"item"]];
}

@end
