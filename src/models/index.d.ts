import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Score, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly score?: number | null;
  readonly difficulty?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyScore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Score, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly score?: number | null;
  readonly difficulty?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Score = LazyLoading extends LazyLoadingDisabled ? EagerScore : LazyScore

export declare const Score: (new (init: ModelInit<Score>) => Score) & {
  copyOf(source: Score, mutator: (draft: MutableModel<Score>) => MutableModel<Score> | void): Score;
}