import { StackHandler } from "@stackframe/stack";
import {stackApp} from '@/app/lib/stack'

export default function Handler(props: any) {
  return <StackHandler app={stackApp} {...props} />;
}