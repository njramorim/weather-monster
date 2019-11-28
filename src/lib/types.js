// @flow
import type { ComponentType } from 'react';

export type HOC<A, B> = (a: ComponentType<A>) => ComponentType<B>;
