import { DynamicModule, Module } from '@nestjs/common';
import { StoreService } from './store.service';

// export interface StoreConfig {
//   dirname: string;
//   filename: string;
// }

export interface StoreRootConfig {
  dirname: string;
}

export interface StoreFeatureConfig {
  filename: string;
}

export const DEFAULT_STORE_DIRNAME = 'store';
export const DEFAULT_STORE_FILENAME = 'data.json';

export type StoreConfig = Partial<StoreRootConfig & StoreFeatureConfig>;

@Module({})
export class StoreModule {
  // static register(config: StoreConfig): DynamicModule {
  //   return {
  //     module: StoreModule,
  //     providers: [
  //       StoreService,
  //       {
  //         provide: 'STORE_CONFIG',
  //         useValue: config,
  //       },
  //     ],
  //     exports: [StoreService],
  //   };
  // }

  static forRoot(storeRootConfig?: StoreRootConfig): DynamicModule {
    const rootConfig = StoreModule.createConfig(storeRootConfig);
    return {
      module: StoreModule,
      providers: [
        StoreService,
        {
          provide: 'STORE_CONFIG',
          useValue: rootConfig,
        },
      ],
    };
  }

  static forFeature(storeFeatureConfig?: StoreFeatureConfig): DynamicModule {
    const token = 'STORE_SERVICE' + storeFeatureConfig.filename;
    return {
      module: StoreModule,
      providers: [
        {
          provide: token,
          useFactory: () => {
            const featureConfig = StoreModule.createConfig(storeFeatureConfig);
            return new StoreService(featureConfig);
          },
        },
      ],
      exports: [token],
    };
  }

  private static createConfig(config: StoreConfig): StoreConfig {
    const defaultConfig = {
      dirname: DEFAULT_STORE_DIRNAME,
      filename: DEFAULT_STORE_FILENAME,
    };
    return {
      ...defaultConfig,
      ...config,
    };
  }
}
