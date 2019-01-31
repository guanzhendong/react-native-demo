//
//  HomeViewController.m
//  RN_demo
//
//  Created by ec on 2018/3/22.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "HomeViewController.h"
#import "RNBaseViewController.h"

@interface HomeViewController ()

@end

@implementation HomeViewController

- (void)viewDidLoad {
    [super viewDidLoad];
  
  self.title = @"Home";
}

- (IBAction)gotoRNVC:(id)sender {
  RNBaseViewController *vc = [[RNBaseViewController alloc] initWithProps:@{@"moduleName":@"RN_demo"}];
  [self.navigationController pushViewController:vc animated:YES];
}

- (IBAction)gotoXieCheng:(id)sender {
  RNBaseViewController *vc = [[RNBaseViewController alloc] initWithProps:@{@"moduleName":@"XieCheng"}];
  [self.navigationController pushViewController:vc animated:YES];
}

@end
