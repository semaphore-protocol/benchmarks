<p align="center">
    <h1 align="center">
        <picture>
            <source media="(prefers-color-scheme: dark)" srcset="https://github.com/semaphore-protocol/website/blob/main/static/img/semaphore-icon-dark.svg">
            <source media="(prefers-color-scheme: light)" srcset="https://github.com/semaphore-protocol/website/blob/main/static/img/semaphore-icon.svg">
            <img width="40" alt="Semaphore icon." src="https://github.com/semaphore-protocol/website/blob/main/static/img/semaphore-icon.svg">
        </picture>
        Semaphore benchmarks
    </h1>
</p>

<p align="center">
    <a href="https://github.com/semaphore-protocol" target="_blank">
        <img src="https://img.shields.io/badge/project-Semaphore-blue.svg?style=flat-square">
    </a>
    <a href="https://github.com/semaphore-protocol/benchmarks/blob/main/LICENSE">
        <img alt="Github license" src="https://img.shields.io/github/license/semaphore-protocol/benchmarks.svg?style=flat-square">
    </a>
    <a href="https://github.com/semaphore-protocol/benchmarks/actions?query=workflow%3deploy">
        <img alt="GitHub Workflow test" src="https://img.shields.io/github/actions/workflow/status/semaphore-protocol/benchmarks/deploy.yml?branch=main&label=deploy&style=flat-square&logo=github">
    </a>
    <a href="https://prettier.io/" target="_blank">
        <img alt="Code style prettier" src="https://img.shields.io/badge/code%20style-prettier-f8bc45?style=flat-square&logo=prettier">
    </a>
    <img alt="Repository top language" src="https://img.shields.io/github/languages/top/semaphore-protocol/website?style=flat-square">
</p>

<div align="center">
    <h4>
        <a href="./CONTRIBUTING.md">
            👥 Contributing
        </a>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="./CODE_OF_CONDUCT.md">
            🤝 Code of conduct
        </a>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="https://github.com/semaphore-protocol/benchmarks/issues/new/choose">
            🔎 Issues
        </a>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="https://semaphore.appliedzkp.org/discord">
            🗣️ Chat &amp; Support
        </a>
    </h4>
</div>

| This repository currently contains a simple web app to allow people to generate a Semaphore proof and measure the running time. |
| ------------------------------------------------------------------------------------------------------------------------------- |

## 🛠 Install

Clone this repository:

```bash
git clone https://github.com/semaphore-protocol/benchmarks.git
```

And install the dependencies:

```bash
cd benchmarks && yarn
```

## 📜 Usage

### Start

To start the web app in a local server, run:

```sh
yarn dev
```

### Build

To build the web app, run:

```
yarn build
```

The `build` command generates static content into the `build` directory that can be served by any static content hosting service.
