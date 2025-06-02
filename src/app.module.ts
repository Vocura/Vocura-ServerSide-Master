import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { CvController } from './cv/cv.controller';
import { CvService } from './cv/cv.service';
import { HealthController } from './health/health.controller';
import { HealthService } from './health/health.service';
import { VoiceController } from './voice/voice.controller';
import { VoiceService } from './voice/voice.service';
import { AnalyticsService } from './analytics/analytics.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [AuthModule],
  controllers: [AppController, CvController, HealthController, VoiceController],
  providers: [
    AppService,
    UserService,
    CvService,
    HealthService,
    VoiceService,
    AnalyticsService,
    PrismaService,
  ],
})
export class AppModule {}
