/* @type {import('next').NextConfig} */
const nextConfig = {}
const withBundleAnalyzer = require('@next/bundle-analyzer')()
module.exports =
  process.env.ANALYZE === 'true' ? withBundleAnalyzer(nextConfig) : nextConfig