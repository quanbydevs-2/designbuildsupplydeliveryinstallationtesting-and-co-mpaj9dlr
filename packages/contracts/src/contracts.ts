import { oc } from "@orpc/contract"
import { farmerContract } from "./modules/farmer/farmer.contract.js"
import { cropContract } from "./modules/crop/crop.contract.js"
import { programContract } from "./modules/program/program.contract.js"
import { resourceContract } from "./modules/resource/resource.contract.js"
import { distributionContract } from "./modules/distribution/distribution.contract.js"

export const contract = oc.router({
  farmer: farmerContract,
  crop: cropContract,
  program: programContract,
  resource: resourceContract,
  distribution: distributionContract,
})