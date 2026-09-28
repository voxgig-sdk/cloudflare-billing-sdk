# CloudflareBilling SDK utility: make_context

from cloudflarebilling_sdk.core.context import CloudflareBillingContext


def make_context_util(ctxmap, basectx):
    return CloudflareBillingContext(ctxmap, basectx)
