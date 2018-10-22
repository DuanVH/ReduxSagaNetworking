//
//  DeviceModule.m
//  demoProject
//
//  Created by Thao Truong on 10/4/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "DeviceModule.h"
#import <UIKit/UIKit.h>

@implementation DeviceModule
RCT_EXPORT_MODULE(Device);

RCT_EXPORT_METHOD(getDeviceName:(RCTResponseSenderBlock)callback) {
  NSString *deviceName = [[UIDevice currentDevice] name];
  NSString *error = @"null";
  if (!deviceName.length) {
    error = @"Cannot get device name";
  }
  callback(@[deviceName, error]);
}
@end


