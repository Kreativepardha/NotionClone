import { UserService } from "../src/services/UserService"
import Prisma from "../src/utils/config/DBConfig";



describe('UserService', () => {
    let userService: UserService;

    beforeEach(() => {
        userService = new UserService()
    })

    afterEach(async () => {
    await Prisma.user.deleteMany({ where: { email: 'test@example.com' } });
  });

    it('should register a user', async () => {
        const user = await userService.registerUser('test@example.com', 'password123', 'Test USer');
        expect(user).toHaveProperty('id')
        expect(user.email).toBe('test@example.com')
    })
    it('should log in  a user and return a token ', async () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const user = await userService.registerUser('test@example.com', 'password123', 'Test USer');
        const token = await userService.loginUser('test@example.com', 'password123');
        expect(token).toBeTruthy()
    })
})