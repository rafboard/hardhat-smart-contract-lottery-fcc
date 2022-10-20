const { network } = require("hardhat")
const { developmentsChains } = require("../helper-hardhat-config")

const BASE_FEE = "250000000000000000"
const GAS_PRICE_LINK = 1e9 // 100000000

module.exports = async function({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    const args = [BASE_FEE, GAS_PRICE_LINK]

    if (chainId == 31337) {
        log("Local network detected! Deploying mocks...")
        await deploy("VRFCoordinatorV3Mock", {
            from: deployer,
            log: true,
            args: args
        })
        log("Mocks deployed...")
        log("------------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]
